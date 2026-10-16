import React from 'react'
import TechMarquee from './03_footer_section/01.1_header_marque.jsx'
import Header from './03_footer_section/01.2_header_tech_used.jsx'
import FooterSection from './03_footer_section/03_footerSection.jsx'
import  { useTheme } from "../context/ThemeContext.jsx"

function Footer() {

    const { theme } = useTheme();

    return (
        <>
            <div className='w-full flex flex-col items-center bg-background'>
                {/* <TechMarquee /> */}
                <Header />
                <FooterSection />
            </div>
        </>
    )
}

export default Footer