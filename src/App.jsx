import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Navbar stays fixed on top */}
      <Navbar />

      {/* Main content wrapper (adds spacing so content not hidden behind Navbar) */}
      <main className="pt-20 relative min-h-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        
        {/* Background blur element */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />

        {/* Manager component */}
        <Manager />
      </main>

      {/* Footer below all content */}
      <Footer />
    </>
  )
}

export default App
