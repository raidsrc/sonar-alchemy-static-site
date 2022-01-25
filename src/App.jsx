import { useState } from 'react'
import bw from "./b&w.jpg"

function App() {

  return (
    <div className='text-zinc-100 mb-10'>
      <header className=''>
        <span className='absolute top-60 left-40 text-5xl'>in the future the photograph of us playing will go here</span>
        <img src={bw} className='opacity-50 -z-10 w-screen h-screen brightness-50 header-img-slant' />
        <div className='absolute bottom-20 left-10'>
          <span className=' text-8xl'>Sonar Alchemy</span> <span className='pl-16 text-3xl font-serif font-bold'>noun</span>
        </div>
        <div className='absolute bottom-6 left-10 text-3xl'>
          <span className=''>sō-ˌnär al-kə-mē</span>
        </div>
      </header>
      <main className='font-mono text-lg px-10'>
        <div className='pb-6 text-2xl font-bold'>Definition</div>
        <p className='pl-5'>1. San Francisco busking duo comprised of Raymond Chen, drums, and Nicholas Chan, horns; active since 2017 and well-appreciated by locals.</p>

        
      </main>
    </div>
  )
}

export default App
