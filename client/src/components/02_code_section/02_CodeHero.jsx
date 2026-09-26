import React, { useState, useEffect } from 'react'
import CodeInput from './03_CodeInput.jsx'
import CodeOutput from './04_CodeOutput.jsx'


function Hero() {
    const [inputLang, setInputLang] = useState("python");
    const [outputLang, setOutputLang] = useState('cpp');
    const [outputCode, setOutputCode] = useState('')   // ✅ added
    const [displayedCode, setDisplayedCode] = useState('');
    const [loading, setLoading] = useState(false)

    async function handleConvert(inputCode  /* fromLang */) {
        try {
            setLoading(true)

            const response = await fetch("https://code-converter-backend-4f8u.onrender.com/convert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: inputCode,
                    // fromLang: fromLang,
                    toLang: outputLang
                })
            })

            const data = await response.json()

            // console.log(data);

            if (data.output) {
                setOutputCode(data.output)
                setInputLang(data.detectedLanguage);
                console.log("Detected Language:", data.detectedLanguage)
            } else {
                console.log("Error:", data.error)
            }

        } catch (err) {
            console.log("Frontend Error:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!outputCode) {
            setDisplayedCode("");
            return;
        }

        setDisplayedCode("");

        let index = 0;

        const interval = setInterval(() => {
            setDisplayedCode(outputCode.slice(0, index + 1));
            index++;

            if (index >= outputCode.length) {
                clearInterval(interval);
            }
        }, 5);

        return () => clearInterval(interval);

    }, [outputCode]);


    return (
        <>
            <div className='flex justify-center items-center px-3 sm:px-4 lg:px-0 py-6 sm:py-8 lg:py-0 bg-gray-950'>

                <div className='
                    code-section
                    flex flex-col lg:flex-row
                    justify-evenly items-center lg:items-stretch
                    w-full sm:w-[90vw] lg:w-[85vw]
                    max-w-[1400px]
                    h-auto lg:h-[65vh]
                    gap-10 sm:gap-12 lg:gap-6 xl:gap-4
                    px-4 sm:px-6 lg:px-8
                    py-6 sm:py-8 lg:py-6
                    bg-gray-900
                    rounded-3xl sm:rounded-4xl
                '>

                    <CodeInput
                        handleConvert={handleConvert}
                        loading={loading}
                        inputLang={inputLang}
                    />

                    <CodeOutput
                        outputCode={displayedCode}
                        selectedLang={outputLang}
                        setSelectedLang={setOutputLang}
                    />

                </div>

            </div>
        </>
    )
}

export default Hero