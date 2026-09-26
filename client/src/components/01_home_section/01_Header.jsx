import profilePic from "../../assets/linkedin_picture.jpg";

function Header() {
    return (
        <div id="home" className="relative bg-gray-950">
            <div className="flex justify-between items-center
                px-6 sm:px-10 md:px-30
                py-5
                bg-gray-950 z-2">

                {/* Logo / Title */}
                <h1 className="text-xl sm:text-2xl
                    font-bold font-space-grotesk tracking-wide
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-clip-text text-transparent
                    truncate">
                    Bob's Code Converter
                </h1>

                {/* Nav Links */}
                <nav className="flex items-center gap-8">
                    <a href="#converter" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">
                        Converter
                    </a>
                    <a href="#about" className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors">
                        How It's Built
                    </a>
                    <a
                        href="https://www.linkedin.com/in/unaiz-haider-126409290/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors cursor-pointer"
                    >
                        LinkedIn
                    </a>
                </nav>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Ambient glow beneath */}
            <div className="w-full h-20 bg-gradient-to-r from-transparent via-purple-600/20 to-transparent blur-2xl pointer-events-none" />
        </div>
    );
}

export default Header;