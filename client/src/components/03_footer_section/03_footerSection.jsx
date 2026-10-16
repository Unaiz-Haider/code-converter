import React from "react"
import { useTheme } from "../../context/ThemeContext"

function FooterSection() {

    const { theme } = useTheme();

    return (
        <footer className="w-full bg-gray- text-white mt-auto">

            {/* top border accent */}
            <div className={`w-full h-px  ${theme === "dark" ? "bg-white/10" : "bg-black/20"}`} />

            <div className="flex flex-col items-center py-8 px- gap-4 ">

                {/* logo / brand */}
                <h1 className={`text-3xl font-bold bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 bg-clip-text text-transparent`}>
                    Code Converter
                </h1>

                {/* links row */}
                <div className="flex justify-evenly w-full py-6">

                    {/* contact */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black/90"} border-b border-blue-500 pb-1 w-full`}>Contact</h2>
                        {[
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/unaiz-haider-126409290/' },
                            { name: 'Portfolio', url: '' },
                            { name: 'Gmail', url: 'mailto:unaizhaider11072@gmail.com' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target={item.name === 'Gmail' ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className={` ${ theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-black/90"} hover:scale-[1.05] cursor-pointer transition`}>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* pages */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black/90"} border-b border-blue-500 pb-1 w-full`}>Pages</h2>
                        {[
                            { name: 'Home', id: 'home' },
                            { name: 'Converter', id: 'converter' },
                            { name: 'About', id: 'about' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className={` ${ theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-black/90"} hover:scale-[1.05] cursor-pointer transition`}>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* built with */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black/90"} border-b border-blue-500 pb-1 w-full`}>Built With</h2>
                        {['React, TailwindCSS', 'Node.js, Express.js', 'Vite', 'Gen-AI'].map((item) => (
                            <span key={item} className={` ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-black/90"} hover:scale-[1.05] cursor-pointer transition`}>
                                {item}
                            </span>
                        ))}
                    </div>

                </div>

                {/* divider */}
                <div className={`w-full h-px  ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`} />

                {/* bottom */}
                <div className={`flex flex-col items-center w-full ${ theme === "dark" ? "text-gray-500" : "text-black/90"} font-semibold text-sm`}>
                    <span>© 2025 Code Converter. All rights reserved.</span>
                    <span>@UnaizHaider</span>
                </div>

            </div>
        </footer>
    )
}

export default FooterSection