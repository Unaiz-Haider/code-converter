import Header from './01_home_section/01_Header.jsx'
import Hero from './01_home_section/02_Hero.jsx'
import Footer from './01_home_section/03_Footer.jsx'

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    )
}

export default HomePage

// function Header() {
//     return (
//         <>
//             <div className='flex justify-between items-center p-4 border border-b-gray-600'>
//                 <h1 className='text-white text-2xl'>
//                     Bob's AI Code Converter
//                 </h1>
//                 <button className='text-white px-2 py-1 border rounded-md'>
//                     Dark Mode
//                 </button>
//             </div>
//         </>
//     )
// }

// function HeroSection() {
//     return (
//         <>
//             <div className='flex flex-1 px-12 justify-between'>
//                 <div className='flex flex-col flex-1 justify-center'>
//                     <h1 className='text-white text-8xl mb-4 '>
//                         Code Converter using Gen-AI
//                     </h1>
//                     <p className='text-gray-400 text-2xl'>
//                         Code Converter to make your code conversion easier
//                     </p>
//                 </div>

//                 <div className='flex flex-1 justify-center items-center'>
//                     <div className='border border-gray-600 p-8 rounded-lg'>
//                         <h1 className='text-white text-2xl'>
//                             Demo video playing of the working app
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// // function FooterSection() {
//     return (
//         <div className='flex justify-center relative bottom-12'>
//             <h1 className='text-4xl text-blue-600 cursor-pointer'>
//                 Try out our converter
//             </h1>
//         </div>
//     )
// }

