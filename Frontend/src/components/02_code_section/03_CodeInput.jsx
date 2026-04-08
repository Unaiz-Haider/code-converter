import React, { useState } from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'

function CodeInput({ onConvert, loading }) {
    const [selectedLang, setSelectedLang] = useState('python')
    const [inputCode, setInputCode] = useState('')

    function handleTranslate() {
        if (!inputCode.trim()) return
        onConvert(inputCode, selectedLang)
    }

    return (
        <>
            <div className="flex flex-col">

                <div className="flex flex-col mb-2">
                    <h1 className='font-bold mr-2 text-white'>From</h1>
                    <div className="flex items-center">
                        <CodeLangSelect
                            selectedLang={selectedLang}
                            setSelectedLang={setSelectedLang}
                        />
                    </div>
                </div>

                <div className="relative w-[40vw] h-[60vh]">
                    <textarea
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        className='w-full h-full p-4 pr-4 rounded-md text-white border border-gray-600 resize-none font-mono text-sm focus:outline-none'
                        placeholder='Enter Code'
                    />
                    <button
                        onClick={handleTranslate}
                        disabled={loading}
                        className="absolute bottom-4 right-4 px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active:scale-95 transition">
                        {loading ? 'Translating...' : 'Translate'}
                    </button>
                </div>

            </div>
        </>
    )
}

export default CodeInput