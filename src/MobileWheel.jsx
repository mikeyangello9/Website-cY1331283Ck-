import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { faEnvelope, faFilePen, faFolderOpen, faHouse, faUser, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Home from "./Home"

import About from './About'

import Contact from "./Contact"

import Projects from "./Projects"
import Notes from "./Notes"
import { Route, Routes } from "react-router-dom"


export default function() {

    return <>
            <div class="toggle">O</div>
         

        <div className="mobile">
            <li><Link to="/"> <p className="mobile-nav-element collapse" data-text="home"><FontAwesomeIcon className="icons" icon={faHouse}/></p></Link> </li>
            <li><Link to="/about"> <p className="mobile-nav-element collapse" data-text="home"><FontAwesomeIcon className="icons" icon={faUser}/></p></Link> </li>
            <li><Link to="/projects"><p className="mobile-nav-element collapse" data-text="home"><FontAwesomeIcon className="icons" icon={faFolderOpen}/></p></Link> </li>
            <li><Link to="/contact"><p className="mobile-nav-element collapse" data-text="home"><FontAwesomeIcon className="icons" icon={faEnvelope}/></p></Link> </li>
            <li><Link to="/notes"><p className="mobile-nav-element collapse" data-text="home"><FontAwesomeIcon className="icons" icon={faFilePen}/></p></Link> </li>
      </div>

      <Routes>
          {/* <Route path="/" element={<div className="ui"><Home/></div>}></Route> */}
          <Route path="/About" element={<div className="ui"><About/></div>}></Route>
          <Route path="/Projects" element={<div className="ui"><Projects/></div>}></Route>
          {/* <Route path="/Contact" element={<div className="ui"><Contact/></div>}></Route>*/}
          <Route path="/Notes" element={<div className="ui"><Notes/></div>}></Route> 
      </Routes>

    </>
}