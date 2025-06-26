import { faA, faMoon, faPalette, faSun, faUniversalAccess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Palette from "./Palette"
import { useTheme } from "./ThemeProvider"

export default function Home({ theme }) {


    return <> 
    <ul className="contacts">
        <li style={{background: theme}}><a style={{ color: theme === "wheat" ? "black" : theme === "white" ? "black" : "white", }} target="_blank" className="link github" href="https://github.com/mikeyangello9">GITHUB</a></li>
        <li style={{background: theme}}><a style={{ color: theme === "wheat" ? "black" : theme === "white" ? "black" : "white", }} className="link github" href="https://github.com/mikeyangello9">EMAIL</a></li>
        <li style={{background: theme}}><a style={{ color: theme === "wheat" ? "black" : theme === "white" ? "black" : "white", }} className="link github" href="https://www.linkedin.com/in/aiwekhoe-michael-a37150268/">LINKEDIN</a></li>
    </ul>
     
    </>
}

