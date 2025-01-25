import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { faEnvelope, faFilePen, faFolderOpen, faHouse, faUser, faMoon, faPalette, faSun, faExpand } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeProvider"


import About from './About'

import Display from "./Display"

import Projects from "./Projects"
import Notes from "./Notes"
import { Route, Routes } from "react-router-dom"

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
        <div className= {`nav-element  ${highlight === 'home' ? 'highlighted' : ""} `} onClick={() => showHighlighted('home')}><Link to="/"> <p><FontAwesomeIcon className="icons" icon={faHouse} color={highlight === 'home' ? "white" : theme}/></p></Link> </div> 
        <div className= {`nav-element  ${highlight === 'about' ? 'highlighted' : ""} `} onClick={() => showHighlighted('about')} ><Link to="/about"> <p><FontAwesomeIcon className="icons" icon={faUser}  color={highlight === 'about' ? "white" : theme}/></p></Link> </div>
        <div className= {`nav-element  ${highlight === 'projects' ? 'highlighted' : ""} `} onClick={() => showHighlighted('projects')} ><Link to="/projects"><p><FontAwesomeIcon className="icons" icon={faFolderOpen}  color={highlight === 'projects' ? "white" : theme}/></p></Link> </div>
        <div className= {`nav-element  ${highlight === 'contact' ? 'highlighted' : ""} `} onClick={() => showHighlighted('contact')} ><Link to="/contact"><p><FontAwesomeIcon className="icons" icon={faEnvelope}  color={highlight === 'contact' ? "white" : theme}/></p></Link> </div>
        <div className= {`nav-element  ${highlight === 'notes' ? 'highlighted' : ""} `} onClick={() => showHighlighted('notes')} ><Link to="/notes"><p><FontAwesomeIcon className="icons" icon={faFilePen}  color={highlight === 'notes' ? "white" : theme}/></p></Link> </div>
        
        <div
          className={`nav-element ${highlight === 'toggle' ? 'highlighted' : ""}`}
          onClick={() => {
            showHighlighted('toggle');
            toggleAccessDisplay()
          }}
        >
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

      <Routes>
          {/* <Route path="/" element={<div className="ui"><Home/></div>}></Route> */}
          <Route path="/About" element={<div className="ui"><About/></div>}></Route>
          <Route path="/Projects" element={<div className="ui"><Projects/></div>}></Route>
          {/* <Route path="/Contact" element={<div className="ui"><Contact/></div>}></Route>*/}
          <Route path="/Notes" element={<div className="ui"><Notes/></div>}></Route> 
      </Routes>

      
   

    
      
    </>
}

