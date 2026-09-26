import React from "react"

function CodeLangSelect({ selectedLang, setSelectedLang, ballColor = "#a855f7" }) {
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
        'Assembly': 'assembly',
        'Visual Basic .NET': 'vbnet',
        'F#': 'fsharp',
        'Clojure': 'clojure',
        'Erlang': 'erlang',
        'Fortran': 'fortran',
        'COBOL': 'cobol',
        'Julia': 'julia',
        'OCaml': 'ocaml',
        'Nim': 'nim',
        'Zig': 'zig',
        'Crystal': 'crystal',
        'Solidity': 'solidity',
        'VHDL': 'vhdl',
        'Verilog': 'verilog',
        'Ada': 'ada',
        'Prolog': 'prolog',
        'Lisp': 'lisp',
        'Common Lisp': 'commonlisp',
        'Scheme': 'scheme',
        'Tcl': 'tcl',
        'AWK': 'awk',
        'Sed': 'sed',
        'Bash': 'bash',
        'Fish': 'fish',
        'Smalltalk': 'smalltalk',
        'Pascal': 'pascal',
        'Delphi': 'delphi',
        'Apex': 'apex',
        'ABAP': 'abap',
        'LabVIEW': 'labview',
        'SAS': 'sas',
        'PL/SQL': 'plsql',
        'PostgreSQL': 'postgresql',
        'GraphQL': 'graphql',
        'Elm': 'elm',
        'ReasonML': 'reasonml',
        'Racket': 'racket',
        'Standard ML': 'sml',
        'Mercury': 'mercury',
        'Io': 'io',
        'Pony': 'pony',
        'Hack': 'hack',
        'Monkey C': 'monkeyc',
        'Q#': 'qsharp',
        'Logo': 'logo',
        'ActionScript': 'actionscript',
        'AutoHotkey': 'autohotkey',
        'OpenCL': 'opencl',
        'CUDA': 'cuda'
    }

    return (
        <div className="relative flex items-center min-w-0">

           <div className="w-2 h-2 shrink-0 rounded-full mr-2 sm:mr-4 ml-1 sm:ml-2" style={ {backgroundColor : ballColor}}></div>

            <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className =
                    {`appearance-none pl-2 pr-6 py-1.5 sm:py-2
                    w-[92px] xs:w-[100px] sm:w-[120px]
                    max-w-full
                    rounded-xl
                    bg-white/10 backdrop-blur-md text-white 
                    border border-white/20 shadow-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                    hover:border-white/30 transition cursor-pointer text-xs sm:text-sm`}
            >
                {Object.entries(languages).map(([label, value]) => (
                    <option key={value} value={value} className="bg-gray-900 text-white text-sm">
                        {label}
                    </option>
                ))}

            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-1.5 sm:right-3 flex items-center text-gray-300 text-xs">
                ▾
            </div>
            
        </div>
    )
}

export default CodeLangSelect