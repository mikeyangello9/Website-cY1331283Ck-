import Writeups from "./Writeups"
import NotesData from "./NotesData"
import { useState } from "react"

export default function Notes(){
  const [showCurrentNote, setShowCurrentNote] = useState(false)

   const NotesElements = NotesData.map((data) => {
    
    return <Writeups
                key={data.id}
                title={data.title}
                topic={data.topic}
                body={data.body}
                
            
    />

   })
    return <>
    
    
      <div className="writeup-notes">{NotesElements}</div>
      
   
      
    </>
}