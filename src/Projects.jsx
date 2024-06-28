import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCode, faPenNib } from "@fortawesome/free-solid-svg-icons"
import Programming from "./Prograamming"
import { useState } from "react"
export default function Projects(){


  // conditional rendering here with props passed from db or just a json

  const [showProjects, setShowProjects] = useState(<div>Placeholder</div>)

  const log = () => {
    console.log("here programming")
    setShowProjects(!showProjects)
  }

    return <>
        <div style={{position: "relative"}} className="project-panel ">
            <div className="projects">

              <div onClick={log} className="project">
                <p className="icon">
                    <FontAwesomeIcon icon={faCode}/>
                </p>
                <p>PROGRAMMING</p>
              </div>

              <div className="project">
                <p className="icon">
                    <FontAwesomeIcon icon={faPenNib}/>
                </p>
                <p>GRAPHICS DESIGN</p>
              </div>
            </div>

            <div className="overlay">{showProjects}</div>

        </div>
    </>
}

