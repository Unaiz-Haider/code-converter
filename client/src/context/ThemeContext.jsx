import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider( {children} ) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    const  ToggleTheme = () => {
        setTheme( (currentTheme) => {
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme)
            return newTheme;
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