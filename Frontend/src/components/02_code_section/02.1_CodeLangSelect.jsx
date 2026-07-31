import React from "react"

function CodeLangSelect({ selectedLang, setSelectedLang }) {
    const languages = {
        'Python': 'python',
        'JavaScript': 'javascript',
        'C++': 'cpp',
        'Java': 'java',
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
        <div className="relative">
            <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className=
                    "appearance-none px-4 py-2 pr-10 rounded-lg 
                    bg-white/10 backdrop-blur-md text-white 
                    border border-white/20 shadow-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                    hover:bg-white/20 transition cursor-pointer text-sm"
            >
                {Object.entries(languages).map(([label, value]) => (
                    <option key={value} value={value} className="text-black">
                        {label}
                    </option>
                ))}
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-300">
                ▼
            </div>
            
        </div>
    )
}

export default CodeLangSelect