import { useState } from 'react'
import bw from "./b&w.jpg"
import lua from "./luaa.gif"

function RayProfileBlurb(props) {
  return (
    <span>
      Ray, on the drum kit. He studied molecular biology and computer science in college. He built this website. He's a big fan of Kendrick Lamar. Other artists he likes include Bill Evans, The Killers, A Tribe Called Quest, and Toby Fox. According to him, music makes life worth living.
    </span>
  )
}
function NickProfileBlurb(props) {
  return (
    <span>
      Nick, on the trombone and melodica. He's pursuing graduate studies in the field of education. Learning about music excites him, and he's listening to it all the time. He prefers jazz above all else. Listen closely—he's about to quote <span className='italic'>the lick</span> during a solo. You don't want to miss it.
    </span>
  )
}
function SonarAlchemy() {
  return (
    <span className='text-blue-200'>Sonar Alchemy</span>
  )
}

function App() {

  return (
    <div className='text-zinc-100 mb-10'>
      <header className=''>
        <span className='absolute top-60 w-full text-center text-5xl opacity-60 z-10'>in the future the photograph of us playing will go here</span>
        <img src={bw} className='h-[90vh] opacity-50 -z-10 w-screen md:h-screen brightness-50 header-img-slant object-cover' />
        <div className='absolute md:flex flex-row flex-wrap items-baseline justify-between md:justify-start w-10/12 sm:w-11/12 bottom-44 left-8 md:bottom-32 md:left-10 landscape-phone:bottom-28'>
          <div className='text-5xl md:text-8xl pr-10 pb-2 text-blue-200'>Sonar Alchemy</div>
          <div className='text-3xl font-serif font-bold lg:pl-36'>noun</div>
        </div>
        <div className='absolute left-8 bottom-32 md:bottom-12 md:left-10 text-3xl landscape-phone:bottom-16'>
          <span className=''>sō-ˌnär al-kə-mē</span><span></span>
        </div>
        <div className='font-mono text-lg xl:text-xl px-10 '>
          <div className='pb-6 text-2xl font-serif'>Definition:</div>
          <ol className='list-decimal list-inside pl-5 space-y-2'>
            <li>San Francisco busking duo comprised of Raymond Chen (drums) and Nicholas Chan (horns).</li>
            <li>Active since 2017; well-appreciated by locals.</li>
            {/* <li>Follow Sonar Alchemy at *insert links here insert links here insert links here*.</li> */}
          </ol>
        </div>
      </header>
      <main className='pt-6 sm:pt-16 font-sans text-lg xl:text-xl px-2 sm:px-3 md:px-6 lg:px-10 mb-56'>
        <div className='flex justify-center p-5 xs:p-12 sm:p-15 md:p-20'>
          <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl border p-3 sm:p-6 md:p-8 lg:p-10 text-center'>Got money? Want us to play at your event and make it a dozen times livelier? Email Ray about it at <span className='text-red-300'>rsrchen@ucdavis.edu</span>. </span>
        </div>




        {/* the div below contains the profiles on me and nick */}
        <div className='px-2 lg:px-8 xl:px-20 flex flex-col w-full justify-between'>

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

        {/* below is where the blurb about how sonar alchemy began will go! */}
        <div className='px-5 sm:px-12 lg:px-16 xl:px-40 w-full mt-14 lg:mt-32'>
          <p>
            Nick and Ray were friends for several years before Ray joined Nick in their high school's student jazz band in 2017. Nick, already enrolled in the band for years prior, had been busking in San Francisco on his own for a little while. Ray hadn't the slightest urge to street perform until Nick suggested that they join forces and take the streets by storm with their loud, forceful, jazz-funk/pep band/video game soundtrack-inspired brand of acoustic street music. Just like that, <SonarAlchemy/> was born.
          </p>
          <div>
            <img />
          </div>
          <p>
            They began by playing in <a href="https://www.google.com/maps/place/37%C2%B048'34.0%22N+122%C2%B014'51.4%22W/@37.8094311,-122.2481602,19z/data=!3m1!4b1!4m13!1m6!3m5!1s0x808f87414cfd10fd:0x6501f371c46da839!2sEastshore+Park!8m2!3d37.809542!4d-122.2481954!3m5!1s0x0:0x2b3e6b5d8f2eca94!7e2!8m2!3d37.8094302!4d-122.247613" className='text-blue-500 underline underline-offset-1'>Eastshore Park</a> in Oakland, by Lake Merritt. Playing in Eastshore Park was sufficient enough to get a feel for the task, but when they decided they desired a larger audience, they moved to San Francisco's <a href="https://www.google.com/maps/place/37%C2%B047'47.1%22N+122%C2%B023'40.9%22W/@37.7963417,-122.3948065,19.64z/data=!4m14!1m7!3m6!1s0x808580668cd055bb:0x9cbbc099ec82aef7!2sFerry+Building,+San+Francisco,+CA+94105!3b1!8m2!3d37.7955703!4d-122.3933208!3m5!1s0x80858067274cde0f:0x9a34cfa45705d700!7e2!8m2!3d37.796423!4d-122.3946981" className='text-blue-500 underline underline-offset-1'>Ferry Building</a>. Today, <SonarAlchemy/> calls San Francisco their home and are exploring the city searching for new locations to bring their music.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
