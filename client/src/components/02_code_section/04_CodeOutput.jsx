import React, { useState } from 'react'
import CodeLangSelect from './02.1_CodeLangSelect.jsx'
import Editor from "@monaco-editor/react";

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

    function handleEditorWillMount(monaco) {
        monaco.editor.defineTheme("pure-black", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#000000",
                "editorGutter.background": "#000000",
                "editor.lineHighlightBackground": "#000000",
                "minimap.background": "#000000",
                "scrollbarSlider.background": "#ffffff22",
            },
        });
    }

    return (
        <div className="flex flex-col gap-3 w-full max-w-full lg:w-auto">

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 w-full">

                <CodeLangSelect
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                    ballColor='#ec4899'
                />

                <button
                    onClick={handleCopy}
                    disabled={!outputCode}
                    className={`
                        px-3 sm:px-4
                        py-1.5 sm:py-2
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
                        text-xs sm:text-sm lg:text-base
                        whitespace-nowrap
                    `}
                >
                    Copy
                </button>

            </div>


            {/* Code Box */}
            <div className="
                relative
                w-full lg:w-[40vw]
                h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh]
                min-h-[280px]
                text-sm
                rounded-xl
                overflow-hidden
                bg-black
                backdrop-blur-md
                shadow-lg
            ">

                {outputCode ? (
                    <Editor
                        height="100%"
                        width="100%"
                        language={selectedLang}
                        theme="pure-black"
                        value={outputCode}
                        beforeMount={handleEditorWillMount}
                        options={{
                            readOnly: true,
                            domReadOnly: true,
                            fontSize: 13,
                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            padding: { top: 16, bottom: 16 },
                            lineNumbers: "on",
                            wordWrap: "on",
                            automaticLayout: true,
                            renderLineHighlight: "none",
                            overviewRulerLanes: 0,
                            hideCursorInOverviewRuler: true,
                            cursorStyle: "line-thin",
                            scrollbar: {
                                verticalScrollbarSize: 8,
                                horizontalScrollbarSize: 8,
                            },
                        }}
                    />
                ) : (
                    <div className='w-full h-full p-3 sm:p-4 bg-transparent text-gray-400 resize-none font-mono text-xs sm:text-sm focus:outline-none'>
                        Converted code will appear here...
                    </div>
                )}

                {copied && (
                    <div className="
                        absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10
                        bg-green-600
                        text-white
                        px-2.5 sm:px-4
                        py-1.5 sm:py-2
                        rounded-lg
                        shadow-lg
                        animate-pulse
                        text-xs sm:text-sm lg:text-base
                        whitespace-nowrap
                    ">
                        ✅ Copied
                    </div>
                )}

            </div>

        </div>
    )
}

export default CodeOutput