import { useState } from 'react'
import './App.css'
import HomeSection from './components/01_HomePage.jsx'
import CodeSection from './components/02_CodeApp.jsx'
import FooterSection from './components/03_Footer.jsx'
import { useTheme } from "./context/ThemeContext.jsx"


function App() {
  const { theme } =  useTheme();
  return (
    <>
      <div className={theme === "light" ? "light" : "dark"}>
        <HomeSection />
        <CodeSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App
