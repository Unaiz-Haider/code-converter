import React from 'react'

function Header() {
    return (
        <>
            <div className='h-[90vh] flex flex-col justify-between w-full border border-white'>

                <h1 className='text-6xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>How is this build?</h1>

                <div className='flex justify-evenly w-full border  '>

                    <div className='flex flex-col items-center justify-center gap-6 h-[70vh] w-1/3 border border-gray-600 rounded-lg bg-gray-200'>

                        <h1 className='text-4xl'>Technology Used:</h1>

                        {/* Tech-Stack */}
                        <div className='flex justify-center gap-4'>

                            <div className='border border-[#47A248] rounded overflow-hidden w-16'>
                                <h1 className='text-6xl w-full h-16 text-center text-[#ffffff] bg-[#47A248]'>
                                    M
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                            </div>
                            <div className='border border-black rounded overflow-hidden'>
                                <h1 className='text-6xl w-full h-16 text-center text-[#ffffff] bg-black'>
                                    E
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" />
                            </div>
                            <div className='border border-[#61DAFB] rounded overflow-hidden'>
                                <h1 className='text-6xl w-full h-16 text-center text-white bg-[#61DAFB]'>
                                    R
                                </h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJs" />
                            </div>
                            <div className='border border-[#339933] rounded overflow-hidden'>
                                <h1 className='text-6xl w-full h-16 text-center text-white bg-[#339933]'>N</h1>
                                <img className='w-full h-16 p-2 bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-4 border rounded-full bg-black p-2'>
                            <h1 className='text-center text-4xl text-white'>GitHub</h1>
                            <img
                                style={{ filter: 'invert(1)' }}
                                className='w-20 h-20'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="" />
                        </div>

                        <div className='flex items-center rounded-lg '>

                            {/* text section */}
                            <div className='flex items-center px-4 h-14 bg-[#38BDF8] border border-[#38BDF8] rounded-l-lg'>
                                <h1 className='text-xl text-white font-semibold'>
                                    tailwindcss
                                </h1>
                            </div>

                            {/* logo section */}
                            <div className='flex items-center justify-center h-14 px-4 bg-gray-200 border border-[#38BDF8] rounded-r-lg'>
                                <img
                                    className='h-8 w-8 '
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwindcss"
                                />
                            </div>

                        </div>

                        <div className='border flex justify-center items-center w-3/4 gap-4 rounded-lg'>
                            <h1 className='text-4xl'>Generative AI</h1>
                            <img className='w-14 h-14' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="" />
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