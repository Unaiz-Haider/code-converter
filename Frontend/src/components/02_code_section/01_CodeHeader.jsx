import React from 'react'
function Header() {
    return (
        <>
            <div className='flex flex-col items-center w-full py-12 gap-2'>
                <h1 className='text-4xl text-gray-400'>
                    AI powered
                </h1>
                <h1 className='text-6xl text-white'>
                    Code Translator App
                </h1>
            </div>
        </>
    )
}
export default Header