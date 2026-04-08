import React from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'

function CodeOutput({ outputCode, selectedLang, setSelectedLang }) {

    function handleCopy() {
        if (!outputCode) return
        navigator.clipboard.writeText(outputCode)
    }

    return (
        <div className="flex flex-col">

            <div className="flex flex-col mb-2">
                <h1 className='font-bold mr-2 text-white'>To</h1>
                <div className="flex items-center">
                    <CodeLangSelect
                        selectedLang={selectedLang}
                        setSelectedLang={setSelectedLang}
                    />
                </div>
            </div>

            <p className="text-sm text-gray-400 mb-1">
                Output Language: <span className="text-blue-400">{selectedLang}</span>
            </p>

            <div className="relative w-[40vw] h-[60vh]">
                <textarea
                    value={outputCode}
                    readOnly
                    className='w-full h-full p-4 pr-28 text-white rounded-md border border-gray-600 resize-none font-mono text-sm focus:outline-none'
                    placeholder='Converted code will appear here...'
                />

                <button
                    onClick={handleCopy}
                    disabled={!outputCode}
                    className="absolute top-4 right-4 px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    Copy
                </button>
            </div>

        </div>
    )
}

export default CodeOutput