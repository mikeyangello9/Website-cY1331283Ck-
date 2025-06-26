import Writeups from "./Writeups"
import NotesData from "./NotesData"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider"

export default function Notes(){
  const { theme } = useTheme()
  const [openFolders, setOpenFolders] = useState([])

  const toggleFolder = (folderName) => {
    setOpenFolders(prev => prev.includes(folderName)
      ? prev.filter(f => f !== folderName)
      : [...prev, folderName]
    )
  }

  const groupedNotes = NotesData.reduce((acc, note) => {
    const folder = note.folder || "__no_folder__"
    if (!acc[folder]) acc[folder] = []
    acc[folder].push(note)
    return acc 
  }, {})

  return (
    <div className="just-for-bg">
      <div className="notes-list">
        {Object.entries(groupedNotes).map(([folderName, folderNotes]) => {
            if (folderName === "__no_folder__") {
              return folderNotes.map(note => (
                <Writeups key={note.id} {...note}/>
              ))
            }

            return (
              <div key={folderName} className="folder-section">
                <div className="folder-header" onClick={() => toggleFolder(folderName)}>
                  <FontAwesomeIcon  icon={openFolders.includes(folderName) ? faChevronDown : faChevronRight} style={{ color: theme }}/>
                  <FontAwesomeIcon  icon={faFolder} style={{ marginLeft: "0.5rem", color: theme}}/>
                  <span style={{ marginLeft: "0.5rem", color: "white", borderRadius: "10px"}}>{folderName}</span>
                </div>

                {openFolders.includes(folderName) && (
                  <div className="note-list-indented" style={{borderLeft:`2px solid ${theme}`}}>
                    {folderNotes.map(note => (
                      <Writeups key={note.id} {...note} />
                    ))}
                  </div>
                )}

              </div>
            )
          })
        }
        

      </div>
    </div>
  )

   
}



