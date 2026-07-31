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

            const response = await fetch("http://localhost:5000/convert", {
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

            console.log(data);

            if (data.output) {
                setOutputCode(data.output)
                setInputLang(data.detectedLanguage);
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
        }, 5); // Adjust speed here

        return () => clearInterval(interval);

    }, [outputCode]);

    
    return (
        <>
            <div className='flex justify-center items-center bg-gray-900'>
                <div className='code-section flex justify-between w-[85vw] h-[65vh]'>

                    <CodeInput
                        onConvert={handleConvert}
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