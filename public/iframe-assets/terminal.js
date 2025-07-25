// import { marked } from "marked";
// import NotesData from "../../src/NotesData.js";

const NotesData = [

    {
        id: 1,
        folder: "Exploitation",
        title: "Heap and Heap Overflow",
        body: "Exploitation/Heap_Overflow_Cleaned.md",
        topic: ["C", "Heap", "Exploitation"],
        date: "28-06-2025"
    },

    {
        id: 2,
        title: "Introduction",
        body: "Blog001.md",
        topic: ["About", "intro", "Recon"],
        date: "30-06-2025"
    },
    
    {
        id: 3,
        title: "SQL basics for SQLi",
        folder: "Portswigger",
        body: "Portswigger/SQL injection.md",
        topic: ["web", "burpsuite", "Portswigger"],
        date: "28-06-2025"
    },

    
   
]
//band aid fix

const terminal = () => {
    
    const asciiFetch = document.querySelector(".fetch-ascii")
    

    const randomiseColor = (element) => {
        setInterval(() => {
            let randColor;
            const colorList = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];
            for (let color in colorList) {
                randColor = Math.floor(Math.random() * color);
            }
            element.style.background = colorList[randColor];
        }, 1000);
    };

    

 

    // date.innerText = `${year} ${month + 1} ${todayDate} ${hours}, ${minutes} ${seconds}`;
    // date.dataset.value = `${year} ${month + 1} ${todayDate} ${hours}, ${minutes} ${seconds}`;
    // randomiseColor(date);

  

 

    const hackerize = (element) => {
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';

        element.addEventListener('mouseover', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                element.innerHTML = element.innerHTML
                    .split("")
                    .map((alphabet, index) => {
                        if (index < iterations) {
                            return element.dataset.value[index];
                        }
                        return alphabets[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iterations >= element.dataset.value.length) {
                    clearInterval(interval);
                }
                iterations += 1 / 20;
            }, 30);
        });
    };
    // hackerize(asciiFetch)
  
    /// terminal code
    let container = document.querySelector(".container");
    container.style.display = "flex";
    
    container.style.flexDirection = "column";
    container.style.padding = '1px';
    
    container.style.borderRadius = '7px';
    container.style.fontSize = '9px';



    const inputArray = [];
    const notesTitleArray = [];
    let inNotesDirectory = false;
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            container.scrollTop = container.scrollHeight;
            const wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");
            const input = document.createElement("input");
            input.classList.add('terminal-input');
            input.classList.add('field');
            input.style.fontSize = '9px';
            input.style.border = 'none';

            const label = document.createElement("label");
            label.classList.add('terminal-label');
            label.textContent = "user@terminal$~:";
            label.style.fontSize = '9px';
            label.style.marginRight = "0";

            input.type = "text";

            label.style.display = "block";
           


            wrapper.style.display = "flex";
            wrapper.style.justifyContent = "space-between";
            wrapper.style.gap = "10px";
            wrapper.style.alignItems = "center";
            // 
            
            input.style.marginleft= "10px";
            input.style.display = "block";

            input.addEventListener("focus", () => {
                input.style.border = "none";
                input.style.outline = "none";
            });

            
            input.style.background = 'none';

            wrapper.append(label);
            wrapper.append(input);

            container.append(wrapper);

            // Automatically focus on the input field
            input.focus();

            inputArray.push(input);
            let field;

            for (let i = 0; i < inputArray.length; i++) {
                inputArray[i].disabled = true;
                field = inputArray[i].value;
            }

            const commandList = ['about', 'projects', 'notes'];
            let contents;

            inputArray.map((input) => {
                let handled = false;

                if (input.value === "navigate") {
                    input.value = ""; // clear after
                    console.log("checked"); // check

                    contents = document.createElement('ul');
                    contents.classList.add('contents');

                    const about = document.createElement('li');
                    about.innerText = '/ABOUT';
                    about.style.color = 'aqua';
                    about.style.background = 'none';
                    about.backgroundColor = "transparent"

                    const projects = document.createElement('li');
                    projects.innerText = '/PROJECTS';
                    projects.style.color = 'aqua';
                    projects.style.background = 'none';
                    about.backgroundColor = "transparent"

                    const Notes = document.createElement('li');
                    Notes.innerText = '/NOTES';
                    Notes.style.color = 'aqua';
                    Notes.style.background = 'none';
                    about.backgroundColor = "transparent"

                    contents.append(about);
                    contents.append(projects);
                    contents.append(Notes);

                    contents.style.display = 'flex';
                    contents.style.justifyContent = 'space-around';
                    contents.style.listStyle = 'none';

                    container.append(contents);
                    handled = true;
                } else if (input.value === `display ${commandList[0]}` && container.querySelector('ul') !== null) {
                    input.value = "";
                    
                    // about section
                    const about = document.createElement('p');
                    about.innerText = `I'm a University of Portsmouth final-year BSc Cyber Security and Forensic Computing student with practical experience in malware analysis, system hardening, and team security competitions. To hone my technical abilities, I've created intrusion detection systems, taken part in national CTFs, and established a personal penetration testing lab. I'm currently looking for a graduate position in software or cyber security where I can put my skills to use, develop with a big team, and help safeguard digital infrastructure.`;
                    about.style.fontSize = '9px';
                    about.style.color = 'orange';
                    about.style.padding = '10px';
                    container.append(about);
                    handled = true;
                } else if (input.value === `display ${commandList[1]}` && container.querySelector('ul') !== null) {
                    input.value = '';

                    console.log('display projects');
                    const projects = document.createElement('div');

                    const link = document.createElement('a');
                    link.textContent = ' -- pixliblink';
                    link.href = 'https://github.com/mikeyangello9/PIXLIB';
                    link.target = "_blank";
                    link.style.color = 'red';

                    const link2 = document.createElement('a');
                    link2.textContent = ' -- TCP chat Link --';
                    link2.href = 'https://github.com/mikeyangello9/TCPchat';
                    link2.target = "_blank";
                    link2.style.color = 'aqua';

                    const skillsUsed = document.createElement('h1');
                    skillsUsed.innerText = '<<< Skills Used >>>';
                    skillsUsed.style.display = 'flex';
                    skillsUsed.style.justifyContent = 'center';
                    skillsUsed.style.fontSize = '9px';

                    const skillsUsed1 = document.createElement('h1');
                    skillsUsed1.innerText = '<<< Skills Used >>>';
                    skillsUsed1.style.display = 'flex';
                    skillsUsed1.style.justifyContent = 'center';
                    skillsUsed1.style.fontSize = '9px';

                    // skills
                    const skills = document.createElement('ul');
                    const JavaScript = document.createElement('li');
                    JavaScript.innerText = '<< javaScript >>';
                    JavaScript.style.color = 'aqua';
                    const htmlCanvas = document.createElement('li');
                    htmlCanvas.innerText = '<< HTML Canvas >>';
                    htmlCanvas.style.color = 'aqua';

                    skills.style.border = '1px solid';
                    skills.style.listStyle = 'none';

                    skills.append(JavaScript);
                    skills.append(htmlCanvas);

                    const pixlib = document.createElement('div');
                    pixlib.innerText = "Pixlib - convert images to pixels and enable physics to have mouse interactions, create multiple instances and position using traditional CSS. init() --> this method takes in the canvas context as an argument, loops through the width(rows) and the height(column) of the image, getting the color data(RGBA) and instantiates a particle class if the alpha value in the data is more than one. drawEffect() --> this method takes all of the particle class instances in the particleArray property and draws using the draw() method from the Particle class, sets the fill style for each particle to the the RGBA values gotten from analysing the image data using the built-in html canvas method, getImageData().update() --> this.dx = this.effect.mouse.x - this.x // the difference between the mousex pos and the particle x pos this.dy = this.effect.mouse.y - this.y // the difference between the mousey pos and the particle y-pos, Here's the github link ";

                    pixlib.style.fontSize = '9px';
                    pixlib.style.color = 'orange';
                    pixlib.style.border = '1px solid';
                    pixlib.style.padding = '10px';
                    pixlib.appendChild(link);

                    const tcpchat = document.createElement('div');
                    tcpchat.innerText = 'tcp chat - This is a very small chat application that involves a small-scale peer-to-peer node on a  LAN(client and server connected on a local network). This was done using the Python sockets library.';

                    tcpchat.style.fontSize = '9px';
                    tcpchat.style.color = 'orange';
                    tcpchat.style.border = '1px solid';
                    tcpchat.style.padding = '10px';
                    tcpchat.appendChild(link2);

                    const tcpSkills = document.createElement('ul');
                    const python = document.createElement('li');
                    python.innerText = '<<< python - sockets Library >>>';
                    python.style.color = 'aqua';

                    tcpSkills.style.border = '1px solid';
                    tcpSkills.style.listStyle = 'none';

                    skills.append(JavaScript);
                    skills.append(htmlCanvas);

                    tcpSkills.append(python);

                    projects.append(pixlib);
                    projects.append(skillsUsed);
                    projects.append(skills);

                    projects.append(tcpchat);
                    projects.append(skillsUsed1);
                    projects.append(tcpSkills);

                    container.append(projects);
                    handled = true;
                } 
                else if (input.value === `display ${commandList[2]}` && container.querySelector('ul') !== null) {
                    inNotesDirectory = true;
                    notesTitleArray.length = 0;
                    const terminalNotes = document.createElement("div");
                    terminalNotes.style.background = "none"; // Remove background color
                    terminalNotes.style.backgroundColor = "transparent"; // Remove background color

                    NotesData.forEach((notes) => {
                        notesTitleArray.push(notes.title);
                        const titleDiv = document.createElement("div");
                        titleDiv.textContent = notes.body; // Show note.body only
                        titleDiv.style.color = "white";
                        titleDiv.style.background = "none";
                        titleDiv.style.backgroundColor = "transparent";
                        terminalNotes.append(titleDiv);
                    });

                    container.append(terminalNotes);
                    input.value = "";
                    handled = true;
                } 
                else if (inNotesDirectory && input.value.startsWith("open ")) {
                    const noteBody = input.value.slice(5).trim();
                    // Find the note object by title
                    const note = NotesData.find(n => n.body === noteBody);
                    console.log(note,noteBody)
                    if (note) {
                        const notePath = `/writeups/${note.body}`;
                        fetch(notePath)
                            .then(response => {
                                if(!response.ok) throw new Error("File not found");
                                return response.text();
                            })
                            .then(mdContent => {
                                const markdownDiv = document.createElement("div");
                                markdownDiv.classList.add("rendered-notes")
                                markdownDiv.innerHTML = marked.parse(mdContent);
                                markdownDiv.style.color = "#faf0ca";
                                markdownDiv.style.background = "none";
                                markdownDiv.style.padding = "10px";
                                container.append(markdownDiv);
                                console.log("Opening....");
                            })
                            .catch(err => {
                                console.log("Note file not found!", err)
                                console.log(notePath)
                            })
                    } else {
                        // Display error message in the terminal (no background)
                        const errorDiv = document.createElement("div");
                        errorDiv.textContent = "Note not found!";
                        errorDiv.style.color = "red";
                        errorDiv.style.fontWeight = "bold";
                        errorDiv.style.padding = "8px 0";
                        errorDiv.style.background = "none";
                        errorDiv.style.backgroundColor = "transparent";
                        container.append(errorDiv);
                        console.log("Note not found!");
                    }
                    input.value = "";
                    handled = true;
                } 
                else if (input.value === "clear") {
                    input.value = "";
                    container.innerHTML = "";
                    handled = true;
                }

                // help

                else if (input.value === "help") {
                    input.value = ""
                    const helpMe = document.createElement("pre")

                     
                    helpMe.innerText = `Available commands:
────────────────────────────────────────────
navigate <folder>  - cd into folders. e.g.: navigate /projects
display <thing>  - View content. Try: display about
open <filename.md> - Opens a note. Example: open note1.md
clear         - Clears the terminal screen`;

                    helpMe.style.fontSize = '8px';
                    helpMe.style.color = 'orange';
                    helpMe.style.padding = '1px';
                    container.append(helpMe);
                    handled = true;
                    
                }
                // Only display error if none of the above matched
                if (!handled && input.value.trim() !== "") {
                    const errorDiv = document.createElement("div");
                    errorDiv.classList.add("error-div")
                    errorDiv.textContent = "Error: Unknown command!";
                    errorDiv.style.color = "red";
                    errorDiv.style.fontWeight = "bold";
                    errorDiv.style.padding = "8px 0";
                    container.append(errorDiv);
                    input.value = "";
                }

                const containerChildren = container.children;
                // console.log(containerChildren);
                for (let i = 0; i < containerChildren.length; i++) {
                    containerChildren[i].style.background = '2d2d2d';
                    containerChildren[i].style.color = '#faf0ca';
                }
            });

            if (inputArray.length > 0) {
                inputArray[inputArray.length - 1].disabled = false;
                inputArray[inputArray.length - 1].value = "";
            }
        }
        
        if (e.key == "Tab") return
        const inputs = document.querySelectorAll(".terminal-input");
        const lastInput = inputs[inputs.length - 1];    

        if (lastInput && document.activeElement != lastInput) {
            lastInput.focus()
        }
    });
};

terminal();

 
