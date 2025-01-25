import Tool from "./Tool"
export default function Programming(props){
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
                        <h2 className="name" style={{fontFamily: "Montserrat, sans-serif"}}>{props.name}</h2>
                        <p className="description">{props.description}</p>
                        <ul className="tools">
                            {listOfTech}
                        </ul>
                        <div className="github-link">
                            <a  className="link" href={props.link}>link to github</a>
                        </div>
                            
                        
                    </div>
                </div>
        </div>   
    </>
}