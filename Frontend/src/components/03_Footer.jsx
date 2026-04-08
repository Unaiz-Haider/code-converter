import React from 'react'
import TechMarquee from './03_footer_section/01.1_header_marque.jsx'
import Header from './03_footer_section/01.2_header_tech_used.jsx'
import FooterSection from './03_footer_section/03_footerSection.jsx'

function Footer() {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between items-center bg-gray-900'>
                {/* <TechMarquee /> */}
                <Header />
                <FooterSection />
                <div>
                </div>
            </div>
        </>
    )
}

export default Footer