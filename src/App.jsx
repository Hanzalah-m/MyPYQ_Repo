import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from '/src/Navbar'
import DeveloperPage from './DeveloperPage'

function App() {

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050c2b] via-[#081649] to-[#062a66] text-white">
      <Navbar/>
      <DeveloperPage/>
    </div>
  )
}

export default App
