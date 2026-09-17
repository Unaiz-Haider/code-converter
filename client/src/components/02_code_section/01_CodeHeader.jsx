import React from 'react'

function Header() {
    return (
        <>
            <div className="flex flex-col items-center
                w-full
                font-semibold
                py-8 sm:py-10 md:py-12
                gap-2
                px-4">

                <h1 className="text-2xl sm:text-3xl md:text-4xl
                    text-gray-200
                    text-center">
                    AI powered
                </h1>

                <h1 className="text-4xl sm:text-5xl md:text-6xl
                    text-center
                    bg-gradient-to-r from-blue-400 to-purple-400
                    bg-clip-text text-transparent">
                    Code Converter App
                </h1>

            </div>
        </>
    )
}

export default Header