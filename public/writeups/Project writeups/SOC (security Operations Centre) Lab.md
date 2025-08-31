<div style="background:blue; border-radius:6px; padding:1rem">⚠️ Disclaimer: All content in this lab is sourced from publicly available resources. I do not claim ownership or credit for any of the material.</div>


In this writeup, I will be documenting my attempt to build a basic SOC lab so simulate how operations pertaining to SOC proceeds. After carrying out some research I have drawn a basic architecture diagram, which from my research is really scalable so I am going to label the initial one `level 1` and elevate it as we go.


![[SOC_lab_arch1.png]]


The diagram above represents the first level of our SOC lab. It consists of three virtual machines:

- **Kali Linux** – simulates the attacker, using red team and offensive security tools.

- **Windows 10** – acts as the victim endpoint, serving as both the attack target and a log source with security agents (Wazuh agent and Winlogbeat) installed.

- **SIEM Server (Wazuh Manager)** – collects and analyses security logs from the Windows machine, enabling detection and response actions.


This setup allows us to simulate real-world attack scenarios, monitor endpoint activity, and practice defensive security operations."


## Virtual machine setups

Kali Linux : This can be found on YouTube, network chuck is one of the good ones https://www.youtube.com/watch?v=wX75Z-4MEoM


## Windows 10 set up
For this lab, we have used the windows 10 media creation tool to obtain out ISO file. below are images of the setup to follow.

![[get_iso.png]]



![[get_iso2.png]]



![[save_iso.png]]
below we created a new VM in VirtualBox with the newly obtained ISO file from the media creation tool.
![[vm_setup.png]]
we have selected the home version of this windows because it will suffice for the SOC lab. 
![[win10setup_1.png]]

below we created a local account.
PS: to do so without being prompted for a Microsoft email, simply remove the network adapter/turn off WI-FI

![[create_local.png]]

After this we can simply follow through the other self explanatory settings windows usually has.

## Windows 10 VM tools for SOC lab
### Sysmon
Sysmon (System monitor) is a tool from Microsoft's Sys internals suite that runs as a service and logs detailed systems activities into the WEL (windows event log). it also provides detailed telemetry data to out SIEM (Wazuh in this case)

| Activity                       | Why It’s Useful                                    |
| ------------------------------ | -------------------------------------------------- |
| Process creation               | See what runs and with what command-line args      |
| File creation & changes        | Spot suspicious file drops (like malware payloads) |
| Network connections            | See outbound/inbound connections from any process  |
| Registry changes               | Detect persistence techniques                      |
| File hashes & signatures       | Spot suspicious or unsigned binaries               |
| Scheduled tasks, drivers, etc. | Track auto-start items and system-level changes    |
![[sysmon_download.png]]

![[extract.png]]
The XML file (sysmonconfigexport.xml), tells Sysmon _what events to capture and what to filter out_, making it actually useful for security monitoring and preventing us from drowning in a 'sea of logs'. the GitHub user swiftOnSecurity provides a well hardened configuration file

![[sysmon_configexportXml.png]]

![[iffailed_getxml.png]]
the error above means we need to get the config file as it probably does not exist in the directory

![[mustbeAdmin.png]]

![[sysmon_for_logging.png]]
### Wazuh Agent

The **Wazuh agent** is a lightweight program you install on endpoints (Windows, Linux, macOS, etc.) so they can be monitored by a **Wazuh manager** (the central server). below is the set up on our windows 10 endpoint.

![[wazuh_agent.png]]

The **`ossec.conf` file** is the main configuration file for the Wazuh agent. It defines what the agent monitors and how it communicates with the Wazuh manager. Key details include:

- Agent identity and manager connection settings
- Log collection rules (e.g., system logs, Windows Event Logs, Sysmon)
- File integrity monitoring paths and registry monitoring
- Enabled modules and detection rules
- Communication and output options

In short, `ossec.conf` acts as the blueprint that tells the Wazuh agent **what to collect, how to analyze it, and**
below we can find standout information such as IP address, port and protocol.

![[ossec.conf.png]]

#### How Sysmon integrates with the Wazuh Agent 

- Sysmon = collects rich security events from the Windows Event Logs
- Wazuh agent = ships those events to Wazuh + applies detection rules

![[wazuh-installed.png]]

This will be all for our Agent (client) living on the endpoint machine, the next step will be the server or the manager which will communicate with the Agent, monitor the endpoint (EDR) and detect anything according to the rules we specify. 
### Wazuh Manager
The Wazuh manager serves as the server for our client (Wazuh Agent) being housed in the Endpoint, the manager is responsible for data analysis and alerting, it is capable of forwarding alerts through syslog, below is the Wazuh server terminal running Amazon Linux.

![[wazuh_manager.png]]

we can view the IP address assigned to this machine.

![[manager_IP.png]]

![[agent_IP.png]]

#### Manual Agent Registration
To connect an endpoint to the Wazuh server, we navigate to `/var/ossec/bin/` on the manager and use the `manage_agents` wizard. This allows us to register new agents and generate keys that authenticate endpoints with the manager.


![[reg-agent.png]]
in the image above we create a add a name for our endpoint (win10-endpoint), add the IP address and then an ID will be assigned (ID 001).

![[adding_agent.png]]
To register the endpoint, we need a unique key. This can be generated using the **Extract key** action in the `manage_agents` wizard, which will prompt for the agent’s ID.

![[confirm_ep.png]]

This unique key will then be used on the client-side to register the agent.

```powershell
agent-auth -m <manager_IP> -k <agent_key>
```

![[agent-manager.png]]


```powershell
sc stop WazuhSvc
sc start WazuhSvc
```

we can restart the Wazuh service on the endpoint to establish this connection, we can confirm that it has been registered by running the `./manage-agents` script on the manager, and using the List action to find our registered agent.

![[confirm_agent.png]]



![[start_agent.png]]






#### Auto Agent Registration

I tried doing it manually… then Wazuh just connected my endpoint by itself. At first I panicked, then I realized I had just been outsmarted by my own lab, below is the XML code that makes this magic happen
```xml
<ossec_config>
  <auth>
    <disabled>no</disabled>       <!-- Enables agent authentication -->
    <auto_add>yes</auto_add>      <!-- Allows agents to register automatically -->
  </auth>
</ossec_config>

```


#### Logging Events via Sysmon on Event viewer for the Endpoint

We can monitor changes made on our endpoint on our server (Wazuh manager), in the image below we can see on the server .json logs of notepad being open using the tail command with the archives.json file

![[archive.json.png]]


Difference between the `archives.json` and the `alert.json`

|Feature|`archives.json`|`alert.json`|
|---|---|---|
|**Purpose**|Stores all captured Sysmon events for historical reference|Stores only events that trigger security rules or alerts|
|**Content**|Full, unfiltered logs of system activity|Filtered subset of logs that match detection rules|
|**Real-time updates**|Typically updates immediately as events occur|Updates only when a matching rule is triggered; may be delayed|
|**Use case**|Forensics, auditing, compliance, general monitoring|Security monitoring, incident detection, alerting|
|**Volume**|Usually large; contains all events|Smaller; only relevant or suspicious events|
|**Dependency on rules**|Independent of detection rules|Fully dependent on configured rules or thresholds|
|**Examples**|Every process creation, network connection, file change|Execution of unsigned executable, suspicious network activity|
we will build upon this on the scalable version of this project.

# References

https://github.com/SwiftOnSecurity/sysmon-config
https://documentation.wazuh.com/current/installation-guide/wazuh-agent/index.html
https://documentation.wazuh.com/current/deployment-options/virtual-machine/virtual-machine.html
https://documentation.wazuh.com/current/installation-guide/wazuh-agent/index.html
https://documentation.wazuh.com/current/installation-guide/wazuh-agent/wazuh-agent-package-windows.html
https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon
https://documentation.wazuh.com/current/user-manual/agent/agent-management/index.html




