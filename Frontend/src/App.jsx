import { useState } from 'react'
import './App.css'
import HomeSection from './components/01_HomePage.jsx'
import CodeSection from './components/02_CodeApp.jsx'
import FooterSection from './components/03_Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeSection />
      <CodeSection />
      <FooterSection />
    </>
  )
}

export default App
