function Hero() {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-900'>

                <div className="flex flex-col lg:flex-row justify-between w-full px-6 sm:px-8 lg:px-12 gap-10 lg:gap-0">
                    
                    <div className='flex flex-col justify-center w-full lg:w-auto'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold mb-6 w-full lg:w-6/7 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center lg:text-left'>
                            Code Converter using Gen-AI
                        </h1>

                        <p className='text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-150 text-center'>
                            Code Converter to make your code conversion easier
                        </p>
                    </div>

                    <div className='flex items-center justify-center border border-gray-600 p-6 sm:p-8 rounded-lg w-full lg:w-auto'>
                        <h1 className='text-xl sm:text-2xl text-center text-white'>
                            Demo video playing of the working app
                        </h1>
                    </div>

                </div>

                {/* <div className='flex justify-center relative top-20'>
                    <div className='p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg'>
                        <h1 className='text-3xl font-semibold text-white px-6 py-3 rounded-lg bg-gray-800 cursor-pointer hover:bg-gray-700 transition duration-300'>
                            Try out our converter →
                        </h1>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Hero