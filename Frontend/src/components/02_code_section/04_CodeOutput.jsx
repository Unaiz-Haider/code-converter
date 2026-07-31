import React, { useState } from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'

function CodeOutput({ outputCode, selectedLang, setSelectedLang }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {

        try {
            if (!outputCode) return;

            await navigator.clipboard.writeText(outputCode);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000)
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex flex-col gap-3">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className='font-semibold text-white text-lg tracking-wide'>
                    To
                </h1>

                <CodeLangSelect
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                />
            </div>

            {/* Language Info */}
            {/* <p className="text-sm text-gray-400">
                Output: <span className="text-blue-400 font-medium">{selectedLang}</span>
            </p> */}

            {/* Code Box */}
            <div className="relative w-[40vw] h-[60vh] 
                rounded-xl overflow-hidden border border-white/20 
                bg-gray-900/80 backdrop-blur-md shadow-lg">

                <textarea
                    value={outputCode}
                    readOnly
                    className='w-full h-full p-4 pr-28 bg-transparent text-white 
                    resize-none font-mono text-sm focus:outline-none placeholder-gray-400'
                    placeholder='// Converted code will appear here...'
                />

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    disabled={!outputCode}
                    className="absolute top-4 right-8 px-4 py-2 rounded-lg 
                    text-white bg-gradient-to-r from-green-500 to-emerald-500 cursor-pointer
                    hover:scale-105 active:scale-95 transition shadow-md 
                    disabled:opacity-40 disabled:cursor-not-allowed">
                    Copy
                </button>

                {copied && (
                    <div className="
                        absolute top-16 right-8
                        bg-green-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        shadow-lg
                        animate-pulse">
                        ✅ Copied Successfully
                    </div>
                )}

            </div>

        </div>
    )
}

export default CodeOutput