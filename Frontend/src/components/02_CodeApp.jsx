import React from 'react'
import Header from './01_home_section/01_Header'
import Hero from './01_home_section/02_Hero'
import CodeApplication from './02_code_section/CodeApp'


function CodeApp() {
    return (
        <>
            <div className='code-app-page h-screen flex flex-col bg-gray-900'>
                {/* <Header />
                <Hero /> */}
                <CodeApplication />
            </div>
        </>
    )
}
export default CodeApp


// function Header() {
//     return (
//         <>
//             <div className='flex flex-col items-center w-full py-14'>
//                 <h1 className='text-gray-400 text-2xl '>AI powered</h1>
//                 <h1 className='text-white text-6xl'>
//                     Code Translator App
//                 </h1>
//             </div>
//         </>
//     )
// }

// function Hero() {
//     return (
//         <>
//             <div className='flex justify-center items-center p-2'>
//                 <div className='code-section flex justify-between w-[85vw] h-[65vh]'>

//                     <div className="flex flex-col">

//                         <div className="flex flex-col mb-2">
//                             <h1 className='text-white font-bold mr-2'>From</h1>
//                             <div className="flex items-center">
//                                 <select name="" id=""
//                                     className="text-white text-2xl border p-2 rounded-md mr-4">
//                                     <option value="Python">Python</option>
//                                 </select>
//                                 <img src="" alt="image" className="" />
//                             </div>
//                         </div>

//                         <div className="relative w-[40vw] h-[60vh]">
//                             <textarea
//                                 className='w-full h-full p-4 pr-28 rounded-md border bg-white resize-none font-mono text-sm focus:outline-none'
//                                 placeholder='Enter Code'
//                             />

//                             <button
//                                 className="absolute bottom-4 right-4 px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer">
//                                 Translate
//                             </button>
//                         </div>
//                     </div>

//                     {/* right section */}
//                     <div className="flex flex-col">
//                         <div className="flex justify-between items-end mb-2">

//                             <div className="flex flex-col">
//                                 <h1 className='text-white font-bold'>To</h1>
//                                 <div className="flex items-center">
//                                     <select name="" id=""
//                                         className="text-white text-2xl border rounded-md p-2 mr-4">
//                                         <option value="C++">C++</option>
//                                     </select>
//                                     <img src="" alt="C++" />
//                                 </div>
//                             </div>
//                             <button className="text-white px-4 py-2 border-none rounded-md relativ top-2 right-2 bg-blue-600">Copy</button>
//                         </div>
//                         <div className='output-code w-[40vw] h-[60vh] bg-white rounded-md'></div>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )

// }