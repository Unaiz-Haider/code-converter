import React from 'react'
import Header from './01_home_section/01_Header'
import Hero from './01_home_section/02_Hero'
import CodeApplication from './02_code_section/CodeApp'
import { useTheme } from '../context/ThemeContext'



function CodeApp() {
    const { theme } = useTheme();
    
    return (
        <>
            <div className='code-app-page min-h-screen flex flex-col bg-background'>
                <CodeApplication />
            </div>
        </>
    )
}
export default CodeApp

