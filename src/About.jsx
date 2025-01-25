import { useTheme } from "./ThemeProvider"
export default function About(){
    const { theme } = useTheme()

    return <>
        <div style={{position: "relative"}} className="content turn-dark">
            
            <p className="aboutme">I am an enthusiastic student with a deep interest in networking within the extensive cybersecurity domain. 
            I had the opportunity to engage in a project where I conducted a comprehensive analysis of network traffic using Wireshark, specifically focusing on the identification of network packets.</p>

            <h2 style={{textAlign:"center"}}>SKILLS</h2>
            <div className="skills">

                <div className="group">
                    <div className="one">JavaScript</div>
                    <div className="one">Python</div>
                    <div className="one">WireShark</div>
                </div>

                <div className="group">
                    <div className="one">Git</div>
                    <div className="one">Virtualisation</div>
                    <div className="one">Bash</div>
                </div>

            </div>

            <div style={{background:theme}} className="cv">
                <a style={{color: theme ==="white" ? "black" :"white"}} href="https://docs.google.com/document/d/12T7h5uBnRhMt9-GND6VY1bDwd9yag-WfecPMyJ6v6q8/edit#heading=h.7s9nkxl4qkjx">RESUME</a>
            </div>

        </div>

        
</>
}