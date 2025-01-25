import { useEffect, useState } from "react"
import { faBackspace, faBackward, faBook, faLessThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Outline } from "@react-three/postprocessing"
export default function (props) {

    const topic = props.topic.map((t, i) => {
        return <li className="topic-tag" key={i}>{t}</li>
   })

   const [displayNote, setDisplayNote] = useState(false)

   const toggleNotes = () => {
        console.log("clicked")
        setDisplayNote(!displayNote)
    }

 
    if (displayNote) {
        return (
            <div className="note-container">
                <button className="back-button" onClick={toggleNotes}>
                    <FontAwesomeIcon icon={faLessThan}/>
                </button>
                <div className="note-display">
                    <h2>{props.title}</h2>
                </div>

                <div className="text-body">
                    <p>{props.body}</p>
                </div>
            </div>

        )
    }

    
    
    return <>
        <div className="notebook" onClick={toggleNotes}>

          
            <div className="note-details">

                    <div className="note-icon">
                        <FontAwesomeIcon icon={faBook} color="#4a4c54" size="1x"/>
                    </div>

                    <div className="writeup"  style={{display: "flex", fontFamily: "Space Mono, monospace",}}>
                        {props.title}
                    </div>

                    <div className=" topics">
                        {topic}
                    </div>
            </div>
       
            

        </div>
    </>
}