import React from 'react'


function TechCard({ letter, bgcolor, img, alt }) {
    return (
        <div 
            className ='
                relative
                group
                rounded 
                overflow-hidden
                w-18 
                shadow-md 
                hover:scale-110 
                transition 
                duration-300
            '
        >
            <h1 className='
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-6xl
                    text-white
                    transition-transform
                    duration-500
                    ease-in-out
                    group-hover:translate-y-full
                    z-20
                '
                style={{ backgroundColor: bgcolor }}
            >
                {letter}
            </h1>

            <img
                className="
                    w-full
                    h-18
                    p-2
                    bg-white
                    -translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                    ease-out
                "
                src={img}
                alt={alt}
            />

        </div>
    )
}

function Header() {
    return (
        <>
            <div className='h-[90vh] flex flex-col justify-between w-full border border-white '>

                <h1 className='text-6xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>How is this build?</h1>

                <div className='flex justify-evenly w-full border'>

                    <div className='flex flex-col items-center justify-center gap-8 h-[70vh] w-1/3 border border-gray-600 rounded-lg bg-white/10'>

                        <h1 className='text-3xl font-bold text-white tracking-wide'>
                            🚀 Tech Stack
                        </h1>

                        {/* Tech-Stack */}
                        <div className='flex justify-center gap-4'>

                            <TechCard
                                letter={"M"}
                                bgcolor={"#47A248"}
                                img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
                                alt={"MongoDB"}
                            />

                            <TechCard
                                letter={"E"}
                                bgcolor={"black"}
                                img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}
                                alt={"Express.js"}
                            />

                            <TechCard
                                letter={"R"}
                                bgcolor={"#61DAFB"}
                                img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                                alt={"React.js"}
                            />

                            <TechCard
                                letter={"N"}
                                bgcolor={"#339933"}
                                img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}
                                alt={"Node.js"}
                            />

                        </div>


                        {/* <div className='flex justify-center gap-4'>

                            <div className='rounded overflow-hidden w-16 shadow-md hover:scale-110 transition duration-300'>
                                <h1 className='text-6xl w-full h-16 text-center text-[#ffffff] bg-[#47A248]'>
                                    M
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                            </div>
                            <div className='rounded overflow-hidden shadow-md hover:scale-110 transition duration-300'>
                                <h1 className='text-6xl w-full h-16 text-center text-[#ffffff] bg-black'>
                                    E
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" />
                            </div>
                            <div className='rounded overflow-hidden shadow-md hover:scale-110 transition duration-300'>
                                <h1 className='text-6xl w-full h-16 text-center text-white bg-[#61DAFB]'>
                                    R
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJs" />
                            </div>
                            <div className='rounded overflow-hidden shadow-md hover:scale-110 transition duration-300'>
                                <h1 className='text-6xl w-full h-16 text-center text-white bg-[#339933]'>N</h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                            </div>
                        </div> */}


                        <div className="flex items-center gap-4 px-6 py-3 bg-black rounded-full shadow-lg hover:scale-105 transition">
                            <img
                                className="w-8 h-8 invert"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub"
                            />
                            <span className="text-white font-semibold text-lg">GitHub</span>
                        </div>

                        <div className="flex items-center rounded-xl overflow-hidden shadow-md scale-120">
                            <div className="px-5 py-3 bg-sky-400 text-white font-semibold text-">
                                Tailwind CSS
                            </div>
                            <div className="px-5 py-3 bg-white">
                                <img
                                    className="w-6 h-6"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                            text-white rounded-xl shadow-md hover:scale-105 transition">
                            <span className="text-lg font-semibold">Generative AI</span>
                            <span className="text-2xl">🤖</span>
                        </div>

                    </div>

                    <div className='flex flex-col border text-white w-[300px] h-[70vh]'>
                        <h1>Generative AI</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rem, sequi odio tempore enim nihil incidunt minima aliquid dolorem quas ducimus, itaque corporis perferendis esse reprehenderit impedit at non provident?</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Header