import { faA, faMoon, faPalette, faSun, faUniversalAccess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Palette from "./Palette"

export default function Home() {

    // const [toggleLight, setToggleLight] = useState(false)
    // const [togglePalette, setTogglePalette] = useState(false)

    // const toggleFuntion = () => {
    //     setToggleLight(!toggleLight)
    //     console.log("toggled!")
    // }

    // useEffect(() => {
    //     document.body.classList.toggle("dark-mode", !toggleLight)
    //     document.body.classList.toggle("turn-dark", !toggleLight)
    // }, [toggleLight])

    // // palette

    // const displayPalette = () => {
    //     setTogglePalette(!togglePalette)
    // }

    
    // return <>
        
    //     <div className="floating-nav">
    //         <div className="floater colour-picker" onClick={displayPalette}>
    //             <FontAwesomeIcon className="colour-palette" size="2x" icon={faPalette}/>
    //             <div className="colour-que">palette</div>
    //         </div>

    //         <div className=" floater toggle-light-dark" onClick={toggleFuntion}>
    //             <FontAwesomeIcon className="light-icon" size="2x" icon={toggleLight ?  faMoon: faSun}/>
    //             <div className="light-que">toggle</div>
    //         </div>
            
    //         <div className="floater accessibility">
    //             <FontAwesomeIcon icon={faUniversalAccess} size="2x"/>
    //             <div className="access-que">Accessibility</div>
    //         </div>
    //     </div>
          
    //     {togglePalette && <Palette />}
    // </>

    return <> 
    <ul className="contacts">
        <li><a target="_blank" className="link github" href="https://github.com/mikeyangello9">GITHUB</a></li>
        <li><a className="link github" href="https://github.com/mikeyangello9">EMAIL</a></li>
        <li><a className="link github" href="https://www.linkedin.com/in/aiwekhoe-michael-a37150268/">LINKEDIN</a></li>
    </ul>
     
    </>
}

