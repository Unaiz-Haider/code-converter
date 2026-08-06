import React, { useState } from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

    console.log("Output Code:", outputCode);

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


            {/* Code Box */}
            <div className="relative w-[40vw] h-[60vh] text-sm
                rounded-xl overflow-hidden border border-white/20 
                bg-gray-900/80 backdrop-blur-md shadow-lg">

                {outputCode ? (
                    <SyntaxHighlighter
                        language={selectedLang}
                        style={vscDarkPlus}
                        showLineNumbers={true}
                        wrapLongLines={true}
                        customStyle={{
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            padding: "16px",              // p-4
                            paddingRight: "16px",         // pr-4
                            background: "transparent",    // bg-transparent
                            color: "#ffffff",             // text-white
                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", // font-mono
                            fontSize: "",         // text-sm (14px)
                            lineHeight: "1.25rem",        // default Tailwind text-sm line height
                            overflowX: "hidden",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {outputCode}
                    </SyntaxHighlighter>
                ) : (
                    <div className='w-full h-full p-4 pr-4 bg-transparent text-gray-400 resize-none font-mono text-sm focus:outline-none placeholder-gray-40'>
                        Converted code will appear here...
                    </div>
                )
                }


                {/* Copy Button */}
                < button
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

        </div >
    )
}

export default CodeOutput