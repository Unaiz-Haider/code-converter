import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider( {children} ) {
    const [theme, setTheme] = useState("dark");

    const  ToggleTheme = () => {
        setTheme( (currentTheme) => {
            return currentTheme === "dark" ? "light" : "dark"
        });
    };

    return (
        <ThemeContext.Provider value = { {theme, ToggleTheme } }>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return  useContext(ThemeContext);
}