function Hero() {
    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-900'>

                <div className="flex justify-between w-full px-12">
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-8xl  mb-6 w-6/7 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            Code Converter using Gen-AI
                        </h1>
                        <p className='text-gray-400 text-4xl w-150 text-center'>
                            Code Converter to make your code conversion easier
                        </p>
                    </div>

                    <div className='flex items-center justify-center items-center border border-gray-600 p-8 rounded-lg'>
                        <h1 className='text-2xl text-center text-white'>
                            Demo video playing of the working app
                        </h1>
                    </div>
                </div>

                <div className='flex justify-center p-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg relative top-20'>
                    <h1 className='text-4xl text-white p-2 rounded-lg cursor-pointer bg-gray-700'>
                        Try out our converter
                    </h1>
                </div>
                
            </div>
        </>
    )
}

export default Hero