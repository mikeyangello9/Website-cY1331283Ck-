import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { faFilePen, faFolderOpen, faHouse, faUser, faExpand } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeProvider"




import Display from "./Display"


// functionality imperative


export default function Interface(){
  const [highlight, setHighlight] = useState('')
  const { theme } = useTheme()
  console.log(theme)
  const showHighlighted = useCallback((navElement) => {
    setHighlight(navElement)
  }, [])
  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggleAccessDisplay = () => {
      setToggleDisplay(!toggleDisplay)
      console.log("toggled!")
  }

 



    
    return <>
    
    
      
    
     
      <div className="container mobile">
        <div className= {`nav-element home ${highlight === 'home' ? 'highlighted' : ""} `} onClick={() => showHighlighted('home')}><Link to="/"> <p><FontAwesomeIcon className="icons" icon={faHouse} color={highlight === 'home' ? "white" : theme}/></p></Link>
          <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="home-que">Home</div>
        </div> 
        <div className= {`nav-element about ${highlight === 'about' ? 'highlighted' : ""} `} onClick={() => showHighlighted('about')} ><Link to="/about"> <p><FontAwesomeIcon className="icons" icon={faUser}  color={highlight === 'about' ? "white" : theme}/></p></Link>
          <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="about-que">About</div>
        </div>
        <div className= {`nav-element projects ${highlight === 'projects' ? 'highlighted' : ""} `} onClick={() => showHighlighted('projects')} ><Link to="/projects"><p><FontAwesomeIcon className="icons" icon={faFolderOpen}  color={highlight === 'projects' ? "white" : theme}/></p></Link>
        <div style={{background: theme,color: theme ==="white" ? "black" :"white"}} className="project-que">projects</div>
        </div>
        <div className= {`nav-element note ${highlight === 'notes' ? 'highlighted' : ""} `} onClick={() => showHighlighted('notes')} ><Link to="/notes"><p><FontAwesomeIcon className="icons" icon={faFilePen}  color={highlight === 'notes' ? "white" : theme}/></p></Link>
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
            <FontAwesomeIcon
              className="icons"
              color={highlight === 'toggle' ? "white" : theme}
            
            
              icon={faExpand}
            />
          </p>
        </div>
        

       

      </div>

      
      {toggleDisplay && <Display />}

      
   

    
      
    </>
}

