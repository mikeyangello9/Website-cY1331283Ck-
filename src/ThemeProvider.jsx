import React, {createContext, useState, useContext} from 'react'

const ThemeContext = createContext()


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'orange'
    }) 

    const updateTheme = (newColour) => {
        console.log("Upadating theme to:", newColour)
        setTheme(newColour)
        localStorage.setItem('theme', newColour)
    }



    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}