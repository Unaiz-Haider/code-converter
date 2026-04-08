function Header() {
    return (
        <>
            <div className='flex justify-between items-center p-4 bg-gray-900'>
                <h1 className='text-2xl text-white'>
                    Bob's AI Code Converter
                </h1>
                <button className='px-2 py-1 border rounded-md text-white'>
                    Dark Mode
                </button>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </>
    )
}
export default Header