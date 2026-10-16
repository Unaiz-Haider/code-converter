import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Header() {
    const { theme } = useTheme()
    return (
        <>
            <div className="flex flex-col items-center
                w-full
                bg-background
                font-semibold
                py-8 sm:py-10 md:py-12
                gap-2
                px-4">

                <h1 className={`text-2xl sm:text-3xl md:text-4xl
                    
                    ${theme === "dark" ? "text-gray-200" : "text-black/90"}
                    text-center `}
                >
                    AI powered
                </h1>

                <h1 className="text-4xl sm:text-5xl md:text-6xl
                    text-center
                    bg-gradient-to-r from-brand-1 to-brand-3
                    bg-clip-text text-transparent">
                    Code Converter App
                </h1>

            </div>
        </>
    )
}

export default Header