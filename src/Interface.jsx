import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { faEnvelope, faFilePen, faFolderOpen, faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Programming from "./Prograamming"

export default function Interface(){

  

  

    return <>

    
    
      <div className="container">
        <li><Link to="/about"> <p className="nav-element"><FontAwesomeIcon className="icons" icon={faUser}/></p></Link> </li>
        <li><Link to="/projects"><p className="nav-element"><FontAwesomeIcon className="icons" icon={faFolderOpen}/></p></Link> </li>
        <li><Link to="/contact"><p className="nav-element"><FontAwesomeIcon className="icons" icon={faEnvelope}/></p></Link> </li>
        <li><Link to="/notes"><p className="nav-element"><FontAwesomeIcon className="icons" icon={faFilePen}/></p></Link> </li>
      </div>

      <Programming/>
      
    </>
}

