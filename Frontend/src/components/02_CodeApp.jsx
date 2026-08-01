import React from 'react'
import Header from './01_home_section/01_Header'
import Hero from './01_home_section/02_Hero'
import CodeApplication from './02_code_section/CodeApp'


function CodeApp() {
    return (
        <>
            <div className='code-app-page h-screen flex flex-col bg-gray-900'>
                <CodeApplication />
            </div>
        </>
    )
}
export default CodeApp

