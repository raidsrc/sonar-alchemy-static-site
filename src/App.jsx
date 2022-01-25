import { useState } from 'react'
import bw from "./b&w.jpg"

function App() {

  return (
    <div className='text-zinc-100'>
      <div>
        <img src={bw} className='opacity-50 -z-10 relative w-screen h-screen brightness-50' />
        <div className='z-10 '>
          Sonar Alchemy
        </div>
      </div>
      <div className='font-mono'>
        <p>This is where all the text goes!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id erat a odio congue egestas sit amet eget nisi. Fusce in libero vel nunc dictum porttitor. Quisque bibendum nec erat rutrum malesuada. Nulla ac augue a erat faucibus finibus. Donec id tempor ante. Nam interdum erat ipsum, sit amet tempus augue lacinia hendrerit. Quisque id gravida orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

        <p>Nulla cursus urna quis metus lacinia, accumsan tempus erat malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat sed lectus vitae ullamcorper. Pellentesque vel massa felis. Nam vulputate ac dolor sit amet vehicula. Quisque a arcu bibendum, molestie libero sed, faucibus ligula. Suspendisse gravida nulla libero, at pretium sapien elementum id. Nunc lorem lectus, euismod id varius eu, varius at justo. Integer sit amet placerat lectus. Sed nec elementum nunc. Pellentesque rhoncus nisi in molestie ornare. Maecenas a sapien diam.</p>

        <p>Morbi id ante ut dolor venenatis consequat. Phasellus a tempus urna. Etiam ac tincidunt nisl. Fusce tincidunt arcu risus, sit amet hendrerit dolor molestie sed. Praesent ut nunc neque. Phasellus ornare urna eu risus condimentum, quis dignissim orci laoreet. Curabitur et laoreet mi, vitae faucibus elit. Nullam a tellus semper, auctor sem et, maximus nibh. Vivamus felis odio, ornare et metus eget, sodales porttitor libero. Donec sit amet ex a enim pretium tincidunt. Praesent gravida nec leo ac placerat. Sed egestas porttitor ipsum, a dignissim urna posuere rhoncus. Pellentesque mauris massa, bibendum eget imperdiet non, consequat ac mi. Vivamus laoreet eget neque in aliquam. Praesent nibh massa, auctor dapibus luctus ac, pellentesque sed est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

        <p>Donec odio quam, mattis id viverra vel, maximus eget ante. Vivamus in fringilla diam, et facilisis mi. Vestibulum a interdum mauris. Vivamus at euismod urna. Maecenas suscipit congue nisi, a molestie nisl. Praesent ut tempus velit. Morbi semper dapibus lorem, at cursus metus laoreet ac. In sed pretium quam. Pellentesque in tempus magna. Donec sed ex at neque viverra dapibus a eu arcu.</p>

        <p>Fusce interdum sem eu nisi pharetra rhoncus. Vivamus et mauris eget neque sollicitudin congue. Cras eget efficitur sapien. Phasellus varius felis tincidunt ultricies tincidunt. Phasellus vitae laoreet ex, facilisis dignissim elit. Vivamus id dignissim tellus. Maecenas sit amet enim justo. Maecenas ac purus consequat, rhoncus nunc vitae, malesuada tortor. Sed at lectus gravida felis vestibulum aliquam id placerat velit. Nam molestie tellus a gravida blandit.</p>
      </div>
    </div>
  )
}

export default App
