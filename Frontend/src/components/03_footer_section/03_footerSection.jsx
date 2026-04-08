import React from "react"

function FooterSection() {
    return (
        <footer className="w-full bg-gray- text-white mt-auto">

            {/* top border accent */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="flex flex-col items-center py-8 px- gap-4">

                {/* logo / brand */}
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Code Converter
                </h1>

                {/* links row */}
                <div className="flex justify-evenly w-full py-6">

                    {/* contact */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className="text-lg font-semibold text-white border-b border-blue-500 pb-1 w-full">Contact</h2>
                        {['LinkedIn', 'Portfolio', 'GitHub', 'Gmail', 'LeetCode'].map((item) => (
                            <span key={item} className="text-gray-400 hover:text-white cursor-pointer transition">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* pages */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className="text-lg font-semibold text-white border-b border-blue-500 pb-1 w-full">Pages</h2>
                        {['Home', 'Converter', 'About'].map((item) => (
                            <span key={item} className="text-gray-400 hover:text-white cursor-pointer transition">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* built with */}
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className="text-lg font-semibold text-white border-b border-blue-500 pb-1 w-full">Built With</h2>
                        {['React', 'Tailwindcss', 'Vite', 'Gen-AI'].map((item) => (
                            <span key={item} className="text-gray-400 hover:text-white cursor-pointer transition">
                                {item}
                            </span>
                        ))}
                    </div>

                </div>

                {/* divider */}
                <div className="w-full h-[0.5px] bg-gray-700" />

                {/* bottom */}
                <div className="flex justify-between w-full text-gray-500 text-sm">
                    <span>© 2025 Code Converter. All rights reserved.</span>
                    <span>@UnaizHaider</span>
                </div>

            </div>
        </footer>
    )
}

export default FooterSection