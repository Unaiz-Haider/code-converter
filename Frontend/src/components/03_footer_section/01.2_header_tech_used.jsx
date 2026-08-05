import React from 'react'
import OpenAI from '../../assets/OpenAI.svg'


function TechCard({ title, color, techs }) {
    return (
        <>
            {/* <div className = 'relative group rounded overflow-hidden w-16 shadow-md hover:scale-110 transition duration-300'>

             <h1 className ='absolute inset-0 flex items-center justify-center text-4xl text-white transition-transform duration-500 ease-in-out group-hover:translate-y-full z-20'
                 style={{ backgroundColor: bgcolor }}
             >
                 {letter}
             </h1>
        
             <img
                 className = "w-full h-16 p-2 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                 src={img}
                 alt={alt}
             />
        
         </div> */}

            <div className='bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]'>

                <h1 className={`text-lg font-semibold ${color}`}>
                    {title}

                </h1>

                <div className="flex items-center gap-2">

                    {techs.map((tech, index) => (
                        <React.Fragment key={index}>
                            <p className='text-gray-300'>
                                {tech.name}
                            </p>

                            <img
                                className='w-8 h-8'
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

function ModelBenefitCard({ title, benefit, color }){
    return (
        <>
        
        </>
    )
}


function Header() {
    return (
        <>
            <div className='flex flex-col justify-evenly w-full min-h-screen'>

                <div className="text-center flex flex-col items-center gap-5 mb-8">

                    <h1 className="text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        How It's Built
                    </h1>

                    <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-8">
                        Discover the modern technologies and AI workflow that power this
                        intelligent code conversion platform—from the MERN stack to
                        <span className="font-semibold text-white"> GPT-4o mini</span>.
                    </p>

                    <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                </div>


                <div className='flex justify-center gap-20 w-full border'>

                    <div className='flex flex-col items-center justify-center gap-6 min-h-full w-1/3 border border-gray-600 rounded-lg bg-white/10'>

                        <h1 className="text-3xl font-bold text-white">
                            🚀 Tech Stack
                        </h1>

                        {/* <p className="text-gray-300 text-center px-8">
                            Modern web technologies used to build a fast, scalable and AI-powered
                            code conversion platform.
                        </p> */}

                        <div className="w-full px-10 flex flex-col gap-6">

                            <TechCard
                                title="🖥️ Frontend"
                                color="text-blue-400"
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
                                title="⚙️ Backend"
                                color="text-green-400"
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
                                title="🗄️ Database "
                                color="text-emerald-300"
                                techs={[
                                    {
                                        name: "MongoDB",
                                        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                    }
                                ]}
                            />

                            <TechCard
                                title="Version Control "
                                color="text-orange-500"
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
                                title="🤖 AI"
                                color="text-purple-400"
                                techs={[
                                    {
                                        name: "GPT-4o-mini",
                                        logo: `${OpenAI}`
                                    }
                                ]}
                            />


                            {/* <div className="bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]">
                                <h2 className="text-lg font-semibold text-blue-400">
                                    🖥️ Frontend
                                </h2>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-300">
                                        React
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React"
                                    />

                                    <p className="text-gray-300">
                                        Tailwind CSS
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                        alt="Tailwind"
                                    />
                                </div>

                            </div>

                            <div className="bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]">
                                <h2 className="text-lg font-semibold text-green-400">
                                    ⚙️ Backend
                                </h2>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-300">
                                        Node.js
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        alt="Node.js"
                                    />

                                    <p className="text-gray-300">
                                        Express.js
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                        alt="Express.js"
                                    />
                                </div>

                            </div>

                            <div className="bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]">
                                <h2 className="text-lg font-semibold text-emerald-400">
                                    🗄️ Database
                                </h2>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-300">
                                        MongoDB
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        alt="MongoDB"
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]">
                                <h2 className="text-lg font-semibold text-yellow-400">
                                    Version Control
                                </h2>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-300">
                                        Git
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        alt="Git"
                                    />

                                    <p className="text-gray-300">
                                        GitHub
                                    </p>
                                    <img
                                        className="w-8 h-8"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub"
                                    />
                                </div>

                            </div>*/}

                            {/* <div className="bg-gray-900/70 rounded-xl p-3 transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02]">
                                <h2 className="text-lg font-semibold text-purple-400">
                                    🤖 AI
                                </h2>

                                <div className='flex items-center gap-2'>
                                    <p className="text-gray-300">
                                        GPT-4o mini
                                    </p>
                                    <img
                                        className='w-8 h-8'
                                        src={OpenAI}
                                        alt="" />
                                </div>

                            </div>  */}

                        </div>

                    </div>


                    <div className="w-1/3 min-h-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 flex flex-col gap-6 text-white">

                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            🤖 AI Model Used:
                        </h1>

                        <div className="flex items-center justify-between rounded-xl bg-gray-900/70 px-5 py-4">
                            <div>
                                <p className="text-gray-400 text-sm">Model</p>
                                <h2 className="text-2xl font-bold">
                                    GPT-4o-mini
                                </h2>
                            </div>

                            <div className="px-3 py-1 rounded-full bg-white text-green-400 text-sm">
                                <img
                                    src={OpenAI}
                                    alt="OpenAI"
                                    className='w-8 h-8' />
                            </div>
                        </div>

                        <p className="text-gray-300 leading-8">
                            GPT-4o mini powers the AI engine behind this project.
                            It automatically detects the programming language,
                            understands the code structure, and converts it into
                            the selected target language while preserving logic
                            and comments.
                        </p>


                        <div className="grid grid-cols-2 relative top-6 gap-4">

                            <div className="rounded-xl transition-all duration-300 b-white/10 p-4 bg-blue-500/20 hover:bg-blue-500/40 hover:scale-[1.02]">
                                <p className="text-gray-400 text-sm">Latency </p>
                                <h1 className="text-xl font-bold">Low</h1>
                            </div>

                            <div className="rounded-xl transition-all duration-300 b-white/10 p-4 bg-green-500/20 hover:bg-green-500/40 hover:scale-[1.02]">
                                <p className="text-gray-400 text-sm">Cost 💰</p>
                                <h1 className="text-xl font-bold">Affordable</h1>
                            </div>

                            <div className="rounded-xl transition-all duration-300 b-white/10 p-4 bg-purple-500/20 hover:bg-purple-500/40 hover:scale-[1.02]">
                                <p className="text-gray-400 text-sm">Supports 💻</p>
                                <h1 className="text-xl font-bold">50+ Languages</h1>
                            </div>

                            <div className="rounded-xl transition-all duration-300  b-white/10 p-4 bg-pink-500/20 hover:bg-pink-500/40 hover:scale-[1.02]">
                                <p className="text-gray-400 text-sm">Accuracy 🧠</p>
                                <h1 className="text-xl font-bold">High</h1>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Header