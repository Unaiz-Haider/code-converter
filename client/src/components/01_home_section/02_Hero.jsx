import { useState, useRef } from "react"
import { useTheme } from "../../context/ThemeContext"

function Hero() {

    const { theme } = useTheme();

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    function handlePlayPause() {
        if (!videoRef.current) return

        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <div className='flex flex-col items-center justify-evenly min-h-screen w-full gap-12 bg-background'>

            <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-10 gap-10 lg:gap-0 mt-24">

                <div className='flex flex-col items-center justify-center lg:w-auto gap-6'>
                    <h1 className='text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-7xl font-space-grotesk w-full bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 bg-clip-text text-transparent text-center'>
                        Code Converter
                    </h1>

                    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold font-space-grotesk ${theme === "dark" ? "bg-white/90" : "bg-black/90"} w-full lg:w-11/12 bg-clip-text text-transparent text-center`}>
                        using Gen-AI
                    </h1>

                    <p className='text-gray-400 text-sm font-sans sm:text-2xl md:text-3xl lg:text-2xl w-full lg:w-[600px] text-center'>
                        Translate code between any programming language with AI precision.
                    </p>

                    <a href="#converter">
                        <button className="text-white text-base sm:text-lg md:text-xl font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
                            Start Converting
                        </button>
                    </a>

                </div>
            </div>

            <div
                className='relative flex items-center justify-center p-6 sm:p-8 rounded-lg w-full lg:w-2/3 aspect-video 
                            shadow-[0_0_8px_#3B82F614,0_0_14px_#A855F710,0_0_20px_#EC48990A]
                            hover:shadow-[0_0_15px_#3B82F633,0_0_25px_#A855F726,0_0_35px_#EC48991A]
                            hover:border-purple-500/30
                            transition-all duration-300'
            >

                <video
                    ref={videoRef}
                    src="/demo-video.mp4"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    onEnded={() => setIsPlaying(false)}
                    onClick={handlePlayPause}
                    playsInline
                />

                <button
                    onClick={handlePlayPause}
                    className={`
                        absolute
                        flex items-center justify-center
                        w-16 h-16 sm:w-20 sm:h-20
                        rounded-full
                        backdrop-blur-md 
                        hover:scale-110
                        transition-all duration-300
                        z-10
                        cursor-pointer
                        ${ theme === "dark" ? "bg-white/20 hover:bg-white/10" : "bg-gray-800/20 hover:bg-gray-800/10"}
                        
                    `}
                >
                    {isPlaying ? (
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="6" y="5" width="4" height="14" rx="1" />
                            <rect x="14" y="5" width="4" height="14" rx="1" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}

                </button>



            </div>

        </div>
    )
}

export default Hero