import Palette from "./Palette"
import { faMoon, faPalette, faSun, faUniversalAccess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useTheme } from "./ThemeProvider"

export default function Display() {
    const [toggleLight, setToggleLight] = useState(false)
    const [togglePalette, setTogglePalette] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()

    const toggleLightFunction = () => {
        setToggleLight(!toggleLight)
        
    }

    useEffect(() => {
        document.body.classList.toggle("dark-mode", !toggleLight)
        document.body.classList.toggle("turn-dark", !toggleLight)

        // try it
        // document.body.style.background = theme
    }, [toggleLight])

    // palette

    const displayPalette = () => {
        if (togglePalette) {
            setTogglePalette(false)
        } else {
            setIsVisible(true)
            setTogglePalette(true)
        }
       
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    
    return <>
        
        <div className="floating-nav">
            <div className="floater colour-picker" onClick={displayPalette}>
                <FontAwesomeIcon color={theme} className="colour-palette" icon={faPalette}/>
                <div className="colour-que">palette</div>
            </div>

            <div className=" floater toggle-light-dark" onClick={toggleLightFunction}>
                <FontAwesomeIcon color={theme} className="light-icon" icon={toggleLight ?  faMoon: faSun}/>
                <div className="light-que">toggle</div>
            </div>
            
            <div className="floater accessibility">
                <FontAwesomeIcon color={theme} icon={faUniversalAccess}/>
                <div className="access-que">Accessibility</div>
            </div>
        </div>
            
        {isVisible && (<Palette
            isToggled={togglePalette}
            onClose={handleClose}
        />)}
    </>
}