import profilePic from "../../assets/linkedin_picture.jpg";
import { useTheme } from "../../context/ThemeContext";

function Header() {

    const { theme, ToggleTheme } = useTheme();

    return (
        <div id="home" className="relative bg-background">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0
                px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28
                py-5
                bg-background z-20">

                {/* Logo / Title */}
                <h1 className="text-xl sm:text-2xl
                    font-bold font-space-grotesk tracking-wide
                    bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3
                    bg-clip-text text-transparent
                    truncate">
                    Bob's Code Converter
                </h1>

                <div className="flex items-center gap-6">
                    {/* Nav Links */}
                    <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <a href="#converter" className = {`text-text-muted text-xs sm:text-sm md:text-base ${ theme === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer` }>
                            Converter
                        </a>
                        <a href="#about" className = {`text-text-muted text-xs sm:text-sm md:text-base ${ theme === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors`}>
                            How It's Built
                        </a>
                        <a
                            href="https://www.linkedin.com/in/unaiz-haider-126409290/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ `text-text-muted text-xs sm:text-sm md:text-base ${ theme === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer` }
                        >
                            LinkedIn
                        </a>
                    </nav>

                    <div>
                        <button
                            onClick={ToggleTheme}
                            aria-label="Toggle Theme"
                            className ={`rounded-full border border-gray-600 p-2
                                        ${ theme === "dark" ? "hover:bg-white text-white hover:text-black" : "hover:bg-black text-black hover:text-white"}  transition-colors cursor-pointer`}
                        > 
                            { theme === "dark" ? "Light Mode" : "Dark Mode" }
                        </button>
                    </div>

                </div>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Ambient glow beneath */}
            <div className = {`absolute w-[100%] h-40 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent 
                            ${ theme === "dark"? "via-purple-600/20" : "via-blue-600/20" }
                            to-transparent blur-2xl pointer-events-none `} />
        </div>
    );
}

export default Header;