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
        <div className="flex flex-col gap-3 w-full lg:w-auto">

            {/* Header */}
            <div className="flex items-center justify-between w-full">
                <h1 className='font-semibold text-white text-lg tracking-wide'>
                    To
                </h1>

                <CodeLangSelect
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                />
            </div>


            {/* Code Box */}
            <div className="
                relative
                w-full lg:w-[40vw]
                h-[55vh] lg:h-[60vh]
                text-sm
                rounded-xl
                overflow-hidden
                border border-white/20
                bg-gray-900/80
                backdrop-blur-md
                shadow-lg
            ">

                {outputCode ? (
                    <SyntaxHighlighter
                        className="text-sm lg:text-lg"
                        language={selectedLang}
                        style={vscDarkPlus}
                        showLineNumbers={true}
                        wrapLongLines={true}
                        customStyle={{
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            padding: "16px",
                            paddingRight: "16px",
                            background: "transparent",
                            color: "#ffffff",
                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                            lineHeight: "1.25rem",
                            overflowX: "hidden",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {outputCode}
                    </SyntaxHighlighter>
                ) : (
                    <div className='w-full h-full p-4 pr-4 bg-transparent text-gray-400 resize-none font-mono text-sm focus:outline-none'>
                        Converted code will appear here...
                    </div>
                )}


                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    disabled={!outputCode}
                    className="
                        absolute
                        bottom-4
                        right-4 sm:right-6 lg:right-8
                        px-4 py-2
                        rounded-lg
                        text-white
                        bg-gradient-to-r from-green-500 to-emerald-500
                        cursor-pointer
                        hover:scale-105
                        active:scale-95
                        transition
                        shadow-md
                        disabled:opacity-40
                        disabled:cursor-not-allowed
                        text-sm sm:text-base
                    "
                >
                    Copy
                </button>


                {copied && (
                    <div className="
                        absolute
                        top-16
                        right-4 sm:right-6 lg:right-8
                        bg-green-600
                        text-white
                        px-3 sm:px-4
                        py-2
                        rounded-lg
                        shadow-lg
                        animate-pulse
                        text-sm sm:text-base
                    ">
                        ✅ Copied Successfully
                    </div>
                )}

            </div>

        </div>
    )
}

export default CodeOutput