import React from "react"

function CodeLangSelect({ selectedLang, setSelectedLang }) {
    const languages = {
        'JavaScript': 'javascript',
        'C++': 'cpp',
        'Java': 'java',
        'Python': 'python',
        'Go': 'go',
        'Ruby': 'ruby',
        'PHP': 'php',
        'C#': 'csharp',
        'Swift': 'swift',
        'Kotlin': 'kotlin',
        'Rust': 'rust',
        'TypeScript': 'typescript',
        'Scala': 'scala',
        'Perl': 'perl',
        'Haskell': 'haskell',
        'Lua': 'lua',
        'Dart': 'dart',
        'Elixir': 'elixir',
        'C': 'c',
        'R': 'r',
        'Objective-C': 'objectivec',
        'Shell': 'shell',
        'PowerShell': 'powershell',
        'SQL': 'sql',
        'MATLAB': 'matlab',
        'Groovy': 'groovy',
    }

    return (
        <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="text-md text-white border p-2 rounded-md bg-transparent cursor-pointer">
            {Object.entries(languages).map(([label, value]) => (
                <option key={value} value={value} className="text-black">
                    {label}
                </option>
            ))}
        </select>
    )
}

export default CodeLangSelect