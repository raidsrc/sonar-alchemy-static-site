import { useState } from 'react'
import bw from "./b&w.jpg"
import lua from "./luaa.gif"

function RayProfileBlurb(props) {
  return (
    <span>Ray is a student at the University of California, Davis. He's studying biochemistry and computer science, but he'd rather be a musician. </span>
  )
}
function NickProfileBlurb(props) {
  return (
    <span>Nick profile goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error id odit, vel porro ullam dignissimos sed quas omnis natus veniam.</span>
  )
}

function App() {

  return (
    <div className='text-zinc-100 mb-10'>
      <header className=''>
        {/* <span className='absolute top-60 left-10 text-5xl opacity-40'>in the future the photograph of us playing will go here</span> */}
        <img src={bw} className='h-[90vh] opacity-50 -z-10 w-screen md:h-screen brightness-50 header-img-slant object-cover' />
        <div className='absolute md:flex flex-row flex-wrap items-baseline justify-between md:justify-start w-10/12 sm:w-11/12 bottom-44 left-8 md:bottom-32 md:left-10 thin-landscape-phone:bottom-24 '>
          <div className='text-5xl md:text-8xl pr-10 pb-2'>Sonar Alchemy</div>
          <div className='text-3xl font-serif font-bold lg:pl-36'>noun</div>
        </div>
        <div className='absolute left-8 bottom-32 md:bottom-12 md:left-10 text-3xl thin-landscape-phone:bottom-12'>
          <span className=''>sō-ˌnär al-kə-mē</span><span></span>
        </div>
        <div className='font-mono text-lg xl:text-xl px-10 '>
          <div className='pb-6 text-2xl font-serif'>Definition:</div>
          <p className='pl-5'>1. San Francisco busking duo comprised of Raymond Chen (drums) and Nicholas Chan (horns).</p>
          <p className='pl-5'>2. Active since 2017; well-appreciated by locals.</p>
          <p className='pl-5'>3. Follow Sonar Alchemy at *insert links here insert links here insert links here*.</p>
        </div>
      </header>
      <main className='pt-6 sm:pt-16 font-sans text-lg xl:text-xl px-2 sm:px-3 md:px-6 lg:px-10 mb-56'>
        {/* the div below contains the profiles on me and nick */}
        <div className='px-2 md:px-2 lg:px-8 xl:px-20 flex flex-col w-full justify-between'>

          <div className='profile-div sm:text-right lg:hidden'>
            {/* the div and image below only show up when the screen is narrow */}
            <div className='profile-img-mobile'>
              <img src={lua} className='p-8' />
            </div>
            {/* while this img only shows up when the screen is slightly larger than narrow */}
            <img src={lua} className='hidden sm:inline-block profile-img float-right' />
            <RayProfileBlurb />
          </div>

          <div className='profile-div sm:text-left lg:hidden'>
            {/* the div and image below only show up when the screen is narrow */}
            <div className='profile-img-mobile'>
              <img src={lua} className='p-8' />
            </div>
            {/* while this img only shows up when the screen is slightly larger than narrow */}
            <img src={lua} className='hidden sm:inline-block profile-img float-left' />
            <NickProfileBlurb />
          </div>

          {/* the below div only shows up when the screen is wider than 1024 px */}
          <div className='hidden lg:inline-block space-y-12'>
            <div className='flex justify-evenly items-center 2xl:px-20 mr-40'>
              <div className='text-right w-4/6'>
                <RayProfileBlurb />
              </div>
              <img src={lua} className='w-1/4 xl:w-1/5 2xl:w-1/6 max-w-xs' />
            </div>
            <div className='flex justify-evenly items-center 2xl:px-20 ml-40'>
              <img src={lua} className='w-1/4 xl:w-1/5 2xl:w-1/6 max-w-xs' />
              <div className='w-4/6'>
                <NickProfileBlurb />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
