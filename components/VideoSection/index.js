import React from 'react'

const VideoSection = () => {
  return (
    <div className='video-section'>
      <video
        loop
        muted
        autoPlay
        playsInline
        src={'images/video.mp4'}
        type='video/mp4'
      />
    </div>
  )
}

export default VideoSection
