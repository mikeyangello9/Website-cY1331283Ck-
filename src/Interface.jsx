import { useCallback, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { faFilePen, faFolderOpen, faHouse, faUser, faExpand } from "@fortawesome/free-solid-svg-icons"
import { Cog, Folder, FolderClock, Home, HomeIcon, Notebook, User } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeProvider"




import Display from "./Display"


// functionality imperative


export default function Interface(){
  const [highlight, setHighlight] = useState('')
  const { theme } = useTheme()
  
  const showHighlighted = useCallback((navElement) => {
    setHighlight(navElement)
  }, [])
  const [toggleDisplay, setToggleDisplay] = useState(false)
  const location = useLocation()
  const currentPath =location.pathname

  const toggleAccessDisplay = () => {
      setToggleDisplay(!toggleDisplay)
      
  }

 



    
    return <>

     
      <div className="container mobile">
        <div className= {`nav-element home ${currentPath === '/' ? 'highlighted' : ""} `} onClick={() => showHighlighted('home')}><Link to="/"> <p><HomeIcon color={currentPath === '/' ? "white" : theme}/></p></Link>
          <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="home-que">Home</div>
        </div> 
        <div className= {`nav-element about ${currentPath === '/about' ? 'highlighted' : ""} `} onClick={() => showHighlighted('about')} ><Link to="/about"> <p><User  color={currentPath === '/about' ? "white" : theme}/></p></Link>
          <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="about-que">About</div>
        </div>
        <div className= {`nav-element projects ${currentPath === '/projects' ? 'highlighted' : ""} `} onClick={() => showHighlighted('projects')} ><Link to="/projects"><p><Folder  color={currentPath === '/projects' ? "white" : theme}/></p></Link>
        <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="project-que">projects</div>
        </div>
        <div className= {`nav-element note ${currentPath === '/notes' ? 'highlighted' : ""} `} onClick={() => showHighlighted('notes')} ><Link to="/notes"><p><Notebook color={currentPath === '/notes' ? "white" : theme}/></p></Link>
         <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="notes-que">Notes</div>
        </div>
        
        <div
          className={`nav-element access ${highlight === 'toggle' ? 'highlighted' : ""}`}
          onClick={() => {
            // showHighlighted('toggle');
            toggleAccessDisplay()
          }}
        >
          <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="function-que">Acessibility</div>
          <p>
            <Cog
              className="icons"
              color={highlight === 'toggle' ? "white" : theme}
            
            
              
            />
          </p>
        </div>
        

       

      </div>

      
      {toggleDisplay && <Display />}

      
   

    
      
    </>
}

