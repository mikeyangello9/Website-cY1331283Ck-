import { useTheme } from "./ThemeProvider"
import Tool from "./Tool"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faLink } from "@fortawesome/free-solid-svg-icons"



export default function Programming(props){
    const { theme } = useTheme()

    const technologies = props.technology
    const listOfTech = technologies.map((technology, index) => {
        return <li key={index}>
            <Tool
                list={technology}
        />
        </li> 
    })
    return <>
      
            
                <div className="project-component">

                    <div className="details">
                        

                        <div className="center">
                            <h2 className="name" style={{fontFamily: "Montserrat, sans-serif", color: theme}}>{props.name}</h2>
                            <p className="description">{props.description}</p>
                            <ul className="tools">{listOfTech}</ul>
                        </div>
                        

                        

                       
                            
                        
                    </div> 
                    <div className="github-link">
                        <a  className="link" href={props.link} style={{background: theme, color: theme ==="white" ? "black" :"white"}}>
                                <FontAwesomeIcon color={theme === "white" ? "black" : "white"}icon={faLink}/>
                        </a>
                    
                    </div>
                </div>

    </>
}