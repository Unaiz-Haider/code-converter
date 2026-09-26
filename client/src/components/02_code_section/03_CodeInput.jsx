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
        <div className="flex flex-col gap-3 w-full lg:w-auto">

            {/* Header */}
            <div className="flex items-center justify-between w-full">

                <CodeLangSelect
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                    ballColor='#3b82f6'
                />

                <p className="font-semibold text-white/30 text-xs tracking-wide">
                    INPUT CODE
                </p>
            </div>

            {/* Code Box */}
            <div className="
                relative
                w-full lg:w-[40vw]
                h-[55vh] lg:h-[60vh]
                text-sm
                rounded-xl
                overflow-hidden
                bg-black
                backdrop-blur-md
                shadow-lg
            ">

                <Editor
                    height="100%"
                    width="100%"
                    language={selectedLang}
                    theme="pure-black"
                    value={inputCode}
                    onChange={(value) => setInputCode(value || '')}
                    beforeMount={handleEditorWillMount}
                    options={{
                        fontSize: 14,
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
                        scrollbar: {
                            verticalScrollbarSize: 8,
                            horizontalScrollbarSize: 8,
                        },
                    }}
                />

                {/* Convert Button */}
                <button
                    onClick={handleTranslate}
                    disabled={loading}
                    className="
                        absolute
                        bottom-4
                        right-4 sm:right-6 lg:right-8
                        px-4 sm:px-5
                        py-2
                        rounded-lg
                        text-white
                        bg-gradient-to-r from-blue-500 to-purple-500
                        cursor-pointer
                        hover:scale-105
                        active:scale-95
                        transition
                        shadow-md
                        text-sm sm:text-base
                        z-10
                    "
                >
                    {loading ? 'Converting...' : 'Convert'}
                </button>

            </div>

        </div>
    )
}

export default CodeInput