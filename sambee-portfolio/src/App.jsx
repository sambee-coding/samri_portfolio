import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
     <div className="min-h-screen bg-[#f6eee0] flex items-center justify-center">
      <h1 className="text-4xl font-bold text-[#2b1b12]">
        Hello, Sambee 🐝
      </h1>
    </div>

    <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4">
  <h1 className="font-display text-4xl font-semibold text-espresso">Fraunces display</h1>
  <p className="font-body text-ink-soft">Inter body text</p>
  <span className="font-mono text-xs uppercase tracking-widest text-comb-amber">Space Mono label</span>
</div>
    </>
  )
}

export default App
