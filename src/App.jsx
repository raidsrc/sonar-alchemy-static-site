import { useState } from 'react'
import bw from "./b&w.jpg"

function App() {

  return (
    <div className='text-zinc-100 mb-10'>
      <header className=''>
        {/* <span className='absolute top-60 left-40 text-5xl'>in the future the photograph of us playing will go here</span> */}
        <img src={bw} className='h-[90vh] opacity-50 -z-10 md:w-screen md:h-screen brightness-50 header-img-slant object-cover' />
        <div className='absolute md:flex flex-row flex-wrap items-baseline justify-between md:justify-start w-11/12 bottom-44 left-8 md:bottom-32 md:left-10'>
          <div className='text-5xl md:text-8xl pr-10'>Sonar Alchemy</div>
          <div className='text-3xl font-serif font-bold lg:pl-36'>noun</div>
        </div>
        <div className='absolute left-8 bottom-32 md:bottom-12 md:left-10 text-3xl'>
          <span className=''>sō-ˌnär al-kə-mē</span>
        </div>
      </header>
      <main className='font-mono text-lg xl:text-xl px-10'>
        <div className='pb-6 text-2xl font-bold'>Definition:</div>
        <p className='pl-5'>1. San Francisco busking duo comprised of Raymond Chen, drums, and Nicholas Chan, horns; active since 2017 and well-appreciated by locals.</p>
        <div className='pt-32'>
          
        </div>
        
      </main>
    </div>
  )
}

export default App
