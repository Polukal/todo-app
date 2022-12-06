import React from 'react'
import videoBg from "./thunder.mp4"

function Background() {
  return (
    <div className='background'>
        <video src={videoBg} autoPlay loop muted></video>
    </div>
  )
}

export default Background