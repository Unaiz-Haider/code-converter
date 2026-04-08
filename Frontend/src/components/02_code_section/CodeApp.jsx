import React from 'react'
import Header from './01_CodeHeader'
import Hero from './02_CodeHero'  


function CodeApplication(){
    return(
        <>
        <div className='code-app-page h-screen flex flex-col'>
                <Header />
                <Hero />
        </div>
        </>
    )
}
export default CodeApplication