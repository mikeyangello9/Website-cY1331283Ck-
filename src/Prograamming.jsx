import { useTheme } from "./ThemeProvider"
import Tool from "./Tool"



export default function Programming(props){
    const { theme } = useTheme()
    console.log(props.technology)
    const technologies = props.technology
    const listOfTech = technologies.map((technology, index) => {
        return <li key={index}>
            <Tool
                list={technology}
        />
        </li> 
    })
    return <>
        <div className="programming-projects">
            
                <div className="programming-project">

                    <div className="details">
                        
                        <div className="type">jjj</div>

                        <div className="center">
                            <h2 className="name" style={{fontFamily: "Montserrat, sans-serif", color: theme}}>{props.name}</h2>
                            <p className="description">{props.description}</p>
                            <ul className="tools">{listOfTech}</ul>
                        </div>
                        

                        

                        <div className="github-link">
                            <a  className="link" href={props.link} style={{background: theme, color: theme ==="white" ? "black" :"white"}}>link</a>
                        </div>
                            
                        
                    </div>
                </div>
        </div>   
    </>
}