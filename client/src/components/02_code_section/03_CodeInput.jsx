import React, { useState, useEffect } from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'
import Editor from "@monaco-editor/react";

function CodeInput({ handleConvert, loading, inputLang }) {
    const [selectedLang, setSelectedLang] = useState('python')
    const [inputCode, setInputCode] = useState('')

    useEffect(() => {
        console.log("Input Language Changed:", inputLang)

        if (inputLang) {
            setSelectedLang(inputLang)
        }
    }, [inputLang])


    function handleTranslate() {
        if (!inputCode.trim()) return
        handleConvert(inputCode /* , selectedLang */)
    }


    return (
        <div className="flex flex-col gap-3">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className='font-semibold text-white text-lg tracking-wide'>
                    From
                </h1>

                <CodeLangSelect
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                />
            </div>

            {/* Code Box */}
            <div className="relative w-[40vw] h-[60vh] 
                rounded-xl overflow-hidden border border-white/20 
                bg-gray-900/80 backdrop-blur-md shadow-lg">

                <textarea
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    spellCheck={false}
                    className='w-full h-full p-4 pr-4 bg-transparent text-white 
                    resize-none font-mono text-sm focus:outline-none placeholder-gray-400'
                    placeholder='Enter your code here...'
                />

                {/* Button */}
                <button
                    onClick={handleTranslate}
                    disabled={loading}
                    className="absolute bottom-4 right-8 px-5 py-2 rounded-lg 
                    text-white bg-gradient-to-r from-blue-500 to-purple-500 
                    cursor-pointer hover:scale-105 active:scale-95 transition shadow-md">
                    {loading ? 'Translating...' : 'Translate'}
                </button>
            </div>

        </div>
    )
}

export default CodeInput