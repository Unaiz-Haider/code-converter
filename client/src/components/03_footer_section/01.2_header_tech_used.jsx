import React from 'react'
import OpenAI from '../../assets/OpenAI.svg'
import { useTheme } from '../../context/ThemeContext'


function TechCard({ title, color, techs }) {

    const { theme } = useTheme();

    return (
        <>
            <div className={`${ theme === "dark" ? "bg-gray-900/70 hover:bg-gray-700" : "bg-gray-200/50 border border-gray-600/40"}  rounded-xl p-3 transition-all duration-300  hover:scale-[1.02]`}>

                <h1 className={`text-lg font-semibold ${color}`}>
                    {title}
                </h1>

                <div className="flex items-center gap-4 flex-wrap">

                    {techs.map((tech, index) => (
                        <React.Fragment key={index}>
                            <p className={`${ theme === "dark" ? "text-gray-300" : "text-black/90"}`}>
                                {tech.name}
                            </p>

                            <img
                                className='w-8 h-8 hover:rotate-6 group-hover:animate-spin'
                                src={tech.logo}
                                alt={tech.name}
                            />
                        </React.Fragment>
                    ))}

                </div>

            </div>
        </>
    )
}

function Header() {

    const { theme } = useTheme();

    return (
            <div id='about' className='flex flex-col justify-evenly w-full min-h-fit mb-14'>

                <div className="text-center flex flex-col items-center gap-5 mb-8 px-4">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 bg-clip-text text-transparent">
                        How It's Built
                    </h1>

                    <p className ={`max-w-3xl text-base sm:text-lg md:text-xl 
                                    ${theme === "dark" ? "text-gray-200" : "text-black/90 font-semibold"}
                                    leading-7 md:leading-8`}
                    >
                        Discover the modern technologies and AI workflow that power this
                        intelligent code conversion platform—from the MERN stack to
                        <span className={` ${theme === "dark" ? "text-gray-200" : "text-gray-400"}`}> GPT-4o mini</span>
                    </p>

                    <div className="w-32 h-1 rounded-full bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3"></div>

                </div>


                <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 w-full px-4 sm:px-6 lg:px-0'>

                    <div className={`flex flex-col gap-6 w-full lg:w-1/3 border  ${ theme === "dark" ? "border-gray-600/40" : "border-gray-600/40"}  rounded-lg  py-6`}>

                        <div className='text-2xl sm:text-3xl font-bold self-start pl-6 sm:pl-10'>
                            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 text-black/90 bg-clip-text text-transparent">
                                Tech Stack
                            </span>
                        </div>

                        <div className="w-full px-5 sm:px-8 lg:px-10 flex flex-col gap-6">

                            <TechCard
                                title="Frontend"
                                color={`${ theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                                techs={[
                                    {
                                        name: "React",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    },
                                    {
                                        name: "Tailwind CSS",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                    }
                                ]}
                            />

                            <TechCard
                                title="Backend"
                                color={`${ theme === "dark" ? "text-green-400" : "text-green-600"}`}
                                techs={[
                                    {
                                        name: "Node.js",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    },
                                    {
                                        name: "Express.js",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                    }
                                ]}
                            />

                            <TechCard
                                title="Database "
                                color={`${ theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                                techs={[
                                    {
                                        name: "MongoDB",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                    }
                                ]}
                            />

                            <TechCard
                                title="Version Control "
                                color={`${ theme === "dark" ? "text-orange-400" : "text-orange-600"}`}
                                techs={[
                                    {
                                        name: "Git",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                    },
                                    {
                                        name: "GitHub",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    }
                                ]}
                            />

                            <TechCard
                                title="Artificial Intelligence"
                                color={`${ theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                                techs={[
                                    {
                                        name: "GPT-4o-mini",
                                        logo: `${OpenAI}`
                                    }
                                ]}
                            />

                        </div>

                    </div>


                    <div className="w-full lg:w-1/3 rounded-2xl border border-gray-600/40 backdrop-blur-lg p-5 sm:p-6 lg:p-8 flex flex-col gap-6 text-white">

                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 bg-clip-text text-transparent">
                            AI Model Used
                        </span>

                        <div className="flex items-center justify-between rounded-xl bg-gray-900/70 px-4 sm:px-5 py-4">

                            <div>
                                <p className={` ${ theme === "dark" ? "text-gray-400" : "text-gray-200"} text-sm`}>Model</p>

                                <h2 className="text-xl sm:text-2xl font-bold">
                                    GPT-4o-mini
                                </h2>
                            </div>

                            <div className="px-3 py-1 rounded-full bg-white text-sm">
                                <img
                                    src={OpenAI}
                                    alt="OpenAI"
                                    className='w-8 h-8'
                                />
                            </div>

                        </div>

                        <p className={` ${ theme === "dark" ? "text-gray-300" : "text-black/90 font-sans font-semibold"} leading-7 md:leading-8`}>
                            GPT-4o mini powers the AI engine behind this project.
                            It automatically detects the programming language,
                            understands the code structure, and converts it into
                            the selected target language while preserving logic
                            and comments.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                            <div className={`rounded-xl transition-all duration-300 p-4 ${ theme === "dark" ? "bg-blue-600/20 hover:bg-blue-500/30" : "bg-blue-500/80 hover:bg-blue-500/100" }  hover:scale-[1.02]`}>
                                <p className={` ${ theme === "dark" ? "text-gray-400" : "text-gray-200" } text-sm`}>Latency </p>
                                <h1 className="text-xl font-bold">Low</h1>
                            </div>

                            <div className={`rounded-xl transition-all duration-300 p-4 ${ theme === "dark" ? "bg-green-600/20 hover:bg-green-400/30" : "bg-green-400/80 hover:bg-green-500/80" } hover:scale-[1.02]`}>
                                <p className={` ${ theme === "dark" ? "text-gray-400" : "text-gray-200" } text-sm`}>Cost</p>
                                <h1 className="text-xl font-bold">Affordable</h1>
                            </div>

                            <div className={`rounded-xl transition-all duration-300 p-4 ${ theme === "dark" ? "bg-purple-500/20 hover:bg-purple-500/40" : "bg-purple-500/80 hover:bg-purple-500/100" } hover:scale-[1.02]`}>
                                <p className={` ${ theme === "dark" ? "text-gray-400" : "text-gray-200" } text-sm`}>Supports</p>
                                <h1 className="text-xl font-bold">50+ Languages</h1>
                            </div>

                            <div className={`rounded-xl transition-all duration-300 p-4 ${ theme === "dark" ? "bg-pink-500/20 hover:bg-pink-500/40" : "bg-pink-500/80 hover:bg-pink-500/100" } hover:scale-[1.02]`}>
                                <p className={` ${ theme === "dark" ? "text-gray-400" : "text-gray-200" } text-sm`}>Accuracy</p>
                                <h1 className="text-xl font-bold">High</h1>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
    )
}

export default Header