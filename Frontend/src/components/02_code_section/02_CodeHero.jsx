import React, { useState } from 'react'
import CodeInput from './03_CodeInput.jsx'
import CodeOutput from './04_CodeOutput.jsx'


function Hero() {
    const [outputLang, setOutputLang] = useState('cpp')
    const [outputCode, setOutputCode] = useState('')   // ✅ added
    const [loading, setLoading] = useState(false)

    async function handleConvert(inputCode, fromLang) {
        try {
            setLoading(true)

            const response = await fetch("http://localhost:5000/convert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: inputCode,
                    fromLang: fromLang,
                    toLang: outputLang
                })
            })

            const data = await response.json()

            if (data.output) {
                setOutputCode(data.output)
            } else {
                console.log("Error:", data.error)
            }

        } catch (err) {
            console.log("Frontend Error:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center bg-gray-900'>
                <div className='code-section flex justify-between w-[85vw] h-[65vh]'>

                    <CodeInput
                        onConvert={handleConvert}
                        loading={loading}
                    />

                    <CodeOutput
                        outputCode={outputCode}
                        selectedLang={outputLang}
                        setSelectedLang={setOutputLang}
                    />

                </div>
            </div>
        </>
    )
}

export default Hero