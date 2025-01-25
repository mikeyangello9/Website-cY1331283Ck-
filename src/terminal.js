const terminal = () => {

    const cycle = document.querySelector('.cycle')
    const header = document.querySelector('.intro')
    const blinkers = document.querySelectorAll('.blinker')
    const visualDiv = document.querySelector('.visual')
    const randomiseColor = (element) => {
      setInterval(() => {
        let randColor
        const colorList = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7']
        for(let color in colorList) {
          randColor = Math.floor(Math.random() * color)
          
        }
      element.style.background = colorList[randColor]
      }, 1000)
    }
    
    randomiseColor(header)

    


    

    const date = document.querySelector('.date')
    
    
    let birthday = new Date();
    const hours = birthday.getHours()
    const minutes = birthday.getMinutes()
    let seconds = 0
      
    setInterval(() => {
      seconds = birthday.getSeconds();
    }, 2000)
    
     
      
    const todayDate = birthday.getDate();
    const month = birthday.getMonth();
    const year = birthday.getFullYear();
    
    date.innerText = `${year} ${month + 1} ${todayDate} ${hours}, ${minutes} ${seconds}`
    date.dataset.value = `${year} ${month + 1} ${todayDate} ${hours}, ${minutes} ${seconds}`
    randomiseColor(date)

    blinkers.forEach(blinker => {
      
      randomiseColor(blinker)
      
    })
    let count = 0
    

    const loading = setInterval(() => {
      const loadbars = document.createElement('div')
      loadbars.classList.add('blinker')
      for (let i = 0; i < 10; i++) {
        visualDiv.appendChild(loadbars)
        count++
      }
      if (count == 100) {
        clearInterval(loading)
        // const bars = visualDiv.childNodes

      }
    }, 1000)

    
    


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
    
    // Example usage
    
    hackerize(cycle);
    hackerize(header);
    hackerize(date);
    
    
      /// terminal code 
      let container = document.querySelector(".container");
      container.style.display = "flex";
      container.style.border = "1px solid white";
      container.style.flexDirection = "column";
      container.style.padding = '1rem'
      container.style.backgroundColor = ' #2d2d2d'
      container.style.borderRadius = '7px'
      container.style.fontSize = '1rem'

      const asciiArt = ".,.,\______/;.;.;."

  
  
      const inputArray = [];
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper")
          const input = document.createElement("input");
          input.classList.add('terminal-input')
          // 

          input.classList.add('field')
          input.style.fontSize = '13px'
          const label = document.createElement("label");
          label.classList.add('terminal-label')
          label.innerText = "user@>:";
          label.style.fontSize = '13px'
          input.type = "text"; 
    
          label.style.display = "block";
          
    
          wrapper.style.display = "flex";
          wrapper.style.alignItems = "center";
          wrapper.style.marginBottom = "5px";
    
          input.style.marginRight = "10px";
          input.style.border = "none";
          input.style.display = "block";
          
    
          input.addEventListener("focus", () => {
          input.style.border = "none";
          input.style.outline = "none";
          });

          ////test
          // document.addEventListener('DOMContentLoaded', () => {
          //   document.querySelector('.field').focus()
          //   console.log('er')
          // })
    
          // input check

          label.style.background = '#2d2d2d'
          input.style.background = '#2d2d2d'
    
          wrapper.append(label);
          wrapper.append(input); //
    
          container.append(wrapper);
          

           
          inputArray.push(input);
          let field;
    
          for (let i = 0; i < inputArray.length; i++) {
            inputArray[i].disabled = true;
            field = inputArray[i].value
          }
    
          const commandList = ['about', 'projects', 'contact']
          let contents
    
        inputArray.map((input) => {
             if (input.value === "navigate") {
              input.value = ""; // clear after
              console.log("checked"); // check
               
               contents = document.createElement('ul')
               contents.classList.add('contents')
               const about = document.createElement('li')
               about.innerText = '<< ABOUT >>'
               
               about.style.fontWeight = 'bolder'
               about.style.color = 'aqua'
               about.dataValue = '<< ABOUT >>'
               about.classList.add('about')
               
               
          
               const projects = document.createElement('li')
               projects.innerText = '<< PROJECTS >>'
               projects.style.color = 'aqua'
               projects.style.fontWeight = 'bolder'
               projects.style.background = '#2d2d2d'
               
               const contact = document.createElement('li')
               contact.innerText = '<< CONTACT >>'
               contact.style.color = 'aqua'
               contact.style.background = '#2d2d2d'
               
    
    
               contents.append(about)
               contents.append(projects)
               contents.append(contact)
    
               contents.style.display = 'inline'
               contents.style.listStyle = 'none'
               
              
    
               container.append(contents)
             }
    
               else if(input.value === `display ${commandList[0]}` && container.querySelector('ul') !== null){
                 input.value = ""
                 console.log('right away!')
                 // about section
                 const about = document.createElement('p')
                 about.innerText = `${asciiArt}\n I am an enthusiastic student with a deep interest in networking within the extensive cybersecurity domain. I had the opportunity to engage in a project where I conducted a comprehensive analysis of network traffic using Wireshark, specifically focusing on the identification of network packets.`
                 about.style.fontSize = '10px'
                 about.style.color = 'orange'
                 about.style.fontSize = '14px'
                 about.style.padding = '10px'
                 container.append(about)
                 
               } else if(input.value === `display ${commandList[1]}` && container.querySelector('ul') !== null){
                 input.value = ''
                 
                 console.log('display projects')
                 const projects = document.createElement('div')
                
    
                 const link = document.createElement('a')
                 link.textContent = ' -- pixliblink'
                 link.href = 'https://github.com/mikeyangello9/PIXLIB'
                 link.target = "_blank"
                 link.style.color = 'red'
                 
                 const link2 = document.createElement('a')
                 link2.textContent = ' -- TCP chat Link --'
                 link2.href = 'https://github.com/mikeyangello9/TCPchat'
                 link2.target = "_blank"
                 link2.style.color = 'aqua'
    
                 const skillsUsed = document.createElement('h1')
                 skillsUsed.innerText = '<<< Skills Used >>>'
                 skillsUsed.style.display = 'flex'
                 skillsUsed.style.justifyContent = 'center'
                 skillsUsed.style.fontSize = '10px'
                 
                 const skillsUsed1 = document.createElement('h1')
                 skillsUsed1.innerText = '<<< Skills Used >>>'
                 skillsUsed1.style.display = 'flex'
                 skillsUsed1.style.justifyContent = 'center'
                 skillsUsed1.style.fontSize = '10px'
    
                 // skills
                 const skills = document.createElement('ul')
                 const JavaScript = document.createElement('li')
                 JavaScript.innerText = '<< javaScript >>'
                 JavaScript.style.color = 'aqua'
                 const htmlCanvas = document.createElement('li')
                 htmlCanvas.innerText = '<< HTML Canvas >>'
                 htmlCanvas.style.color = 'aqua'
                 
                 
                 skills.style.border = '1px solid'
                 skills.style.listStyle = 'none'
    
                 
                 skills.append(JavaScript)
                 skills.append(htmlCanvas)
                 
                 
                 
                 const pixlib = document.createElement('div')
                 pixlib.innerText = "Pixlib - convert images to pixels and enable physics to have mouse interactions, create multiple instances and position using traditional CSS. init() --> this method takes in the canvas context as an argument, loops through the width(rows) and the height(column) of the image, getting the color data(RGBA) and instantiates a particle class if the alpha value in the data is more than one. drawEffect() --> this method takes all of the particle class instances in the particleArray property and draws using the draw() method from the Particle class, sets the fill style for each particle to the the RGBA values gotten from analysing the image data using the built-in html canvas method, getImageData().update() --> this.dx = this.effect.mouse.x - this.x // the difference between the mousex pos and the particle x pos this.dy = this.effect.mouse.y - this.y // the difference between the mousey pos and the particle y-pos, Here's the github link "
    
                 pixlib.style.fontSize = '10px'
                 pixlib.style.color = 'orange'
                 pixlib.style.border = '1px solid'
                 pixlib.style.padding = '10px'
                 pixlib.appendChild(link)
                 
                 const tcpchat = document.createElement('div')
                 tcpchat.innerText = 'tcp chat - This is a very small chat application that involves a small-scale peer-to-peer node on a  LAN(client and server connected on a local network). This was done using the Python sockets library.'
    
                 tcpchat.style.fontSize = '10px'
                 tcpchat.style.color = 'orange'
                 tcpchat.style.border = '1px solid'
                 tcpchat.style.padding = '10px'
                 tcpchat.appendChild(link2)
    
                 const tcpSkills = document.createElement('ul')
                 const python = document.createElement('li')
                 python.innerText = '<<< python - sockets Library >>>'
                 python.style.color = 'aqua'
                 
                 tcpSkills.style.border = '1px solid'
                 tcpSkills.style.listStyle = 'none'
    
                 
                 skills.append(JavaScript)
                 skills.append(htmlCanvas)
    
                 tcpSkills.append(python)
                 
                 projects.append(pixlib)
                 projects.append(skillsUsed)
                 projects.append(skills)
                 
                 projects.append(tcpchat)
                 projects.append(skillsUsed1)
                 projects.append(tcpSkills)
    
                 container.append(projects)
                 
                 
               }
                 else if(input.value == `display ${commandList[2]}` && container.querySelector('ul') !== null){
                   input.value = ""
    
                   // 
                   const contact = document.createElement('div')
                   const github = document.createElement('a')
                   github.style.color = 'white'
                   github.innerText = '<< Github >>'
                   github.target = '_blank'
                   github.href = 'https://github.com/mikeyangello9'
                   
                   const email = document.createElement('a')
                   email.style.color = 'white'
                   email.innerText = '<< E-mail >>'
                   email.target = '_blank'
                   email.href = 'https://github.com/mikeyangello9'
    
                   contact.append(github)
                   contact.append(email)
    
                   container.append(contact)
                   
                   console.log('contacts')
                 }
                 
               else if(input.value === "clear"){
                 input.value = ""
                 container.innerHTML = ""
            }

            const containerChildren = container.children;
            console.log(containerChildren);
            for (let i = 0; i < containerChildren.length; i++) {
                containerChildren[i].style.background = '2d2d2d';
                containerChildren[i].style.color = '#faf0ca';
            }

        })
          if (inputArray.length > 0) {
            inputArray[inputArray.length - 1].disabled = false;
            inputArray[inputArray.length - 1].value = "";
          }
    
          
        }
      });

    };
    
    terminal();
    
    
    