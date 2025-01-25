import React, {createContext, useState, useContext} from 'react'

const ThemeContext = createContext()


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("white") // default theme

    const updateTheme = (newColour) => {
        console.log("Upadating theme to:", newColour)
        setTheme(newColour)
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}