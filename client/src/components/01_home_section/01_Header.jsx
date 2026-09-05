import profilePic from "../../assets/linkedin_picture.jpg";

function Header() {
    return (
        <>
            <div className="flex justify-between items-center
                px-4 sm:px-6 md:px-8
                py-2 sm:py-3
                bg-gray-900 backdrop-blur-md
                border-b border-white/10 shadow-md">

                {/* Logo / Title */}
                <h1 className="text-lg sm:text-2xl md:text-3xl
                    font-bold tracking-wide
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-clip-text text-transparent
                    truncate">
                    Bob's Code Converter
                </h1>

                {/* Profile Icon */}
                <a
                    href="https://www.linkedin.com/in/unaiz-haider-126409290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 ml-3"
                >
                    <img
                        src={profilePic}
                        alt="LinkedIn Profile"
                        className="w-10 h-10
                            sm:w-12 sm:h-12
                            md:w-14 md:h-14
                            rounded-full object-cover object-[50%_20%]
                            cursor-pointer hover:scale-110 transition"
                    />
                </a>
            </div>

            {/* Gradient line */}
            <div className="w-full h-[2px]
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                opacity-80"
            />
        </>
    );
}

export default Header;