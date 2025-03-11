import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCode, faPenNib } from "@fortawesome/free-solid-svg-icons"
import Programming from "./Prograamming"
import projectsData from "./projectsData"
import { useState } from "react"
export default function Projects(){


  // conditional rendering here with props passed from db or just a json

  const [showProjects, setShowProjects] = useState(false)

  const toggle = () => {
    setShowProjects(!showProjects)
  }

 

  const projectElements = projectsData.map(data => {
    return <Programming 
                key={data.id}
                name={data.name}
                description={data.description}
                link={data.link}
                technology={data.technology}
            />
  })



    return <>
        <div  className="project-panel ">

            <div className="overlay"></div>
            <div className="project-grid">{projectElements}</div>
            
           
            
        </div>
    </>
}

