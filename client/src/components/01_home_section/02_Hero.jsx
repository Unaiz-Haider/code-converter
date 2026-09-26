import { useState, useRef } from "react"

function Hero() {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    function handlePlayPause() {
        if(!videoRef.current) return

        if(isPlaying) {
            videoRef.current.pause()
        } else{
            videoRef.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <div className='flex flex-col items-center justify-evenly min-h-screen w-full gap-12 bg-gray-950'>

            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-10 gap-10 lg:gap-0 mt-8">

                <div className='flex flex-col items-center justify-center lg:w-auto gap-6'>
                    <h1 className='text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-7xl font-space-grotesk w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center'>
                        Code Converter
                    </h1>

                    <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold font-space-grotesk bg-white/90 w-full lg:w-11/12 bg-clip-text text-transparent text-center'>
                        using Gen-AI
                    </h1>

                    <p className='text-gray-400 text-sm font-sans sm:text-2xl md:text-3xl lg:text-2xl w-full lg:w-[600px] text-center'>
                        Translate code between any programming language with AI precision.
                    </p>

                    <button className="text-white text-base sm:text-lg md:text-xl font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity">
                        Start Converting
                    </button>

                </div>
            </div>

            <div 
                className = 'flex items-center justify-center p-6 sm:p-8 rounded-lg w-full lg:w-2/3 aspect-video
                shadow-[0_0_8px_rgba(59,130,246,0.08),0_0_14px_rgba(168,85,247,0.06),0_0_20px_rgba(236,72,153,0.04)]
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2),0_0_25px_rgba(168,85,247,0.15),0_0_35px_rgba(236,72,153,0.1)]
                hover:border-purple-500/30
                transition-all duration-300'>

                <video 
                    ref = {videoRef}
                    src="/demo-video.mp4"
                    className=""
                    onEnded={() => setIsPlaying(false)}
                    onClick={handlePlayPause}
                    playsInline
                />

                {isPlaying && (
                    <h1 className = 'absolute top-6 sm:top-8 text-xl sm:text-2xl text-center text-white pointer-events-none'>
                        Demo video playing of the working app
                    </h1>
                )}

            </div>

        </div>
    )
}

export default Hero