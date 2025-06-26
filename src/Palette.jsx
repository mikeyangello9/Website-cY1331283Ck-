import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTheme } from './ThemeProvider'


export default function Palette({ isToggled,onClose }) {
    const themeRef = useRef(null)
    useEffect(() => {
        const theme = themeRef.current
        if (isToggled) {
            gsap.fromTo(
                theme, 
                { scale:0, opacity:0 },
                {scale: 1, opacity:1, duration:0.5, ease:"power2.out"})
        }
        else {
            gsap.to(theme, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: onClose, // Signal removal from DOM
            });
        }

    }, [isToggled, onClose])
    const { updateTheme } = useTheme()
    const colours = [
        "blue",
        "red",
        "OrangeRed",
        "DeepPink",
        "orangered",
        "wheat",
        "coral",
        "BlueViolet",
        "limeGreen",
        "DarkOrange",
        "cadetBlue",
        
    ]
 
    return <>
        <div ref ={themeRef} className="theme">
            {colours.map((colour, index) => (
                <div 
                    key={index}
                    style={{background: colour}}
                    onClick={() => updateTheme(colour)}
                >
                </div>
            ))}
        </div>
    </>
}
