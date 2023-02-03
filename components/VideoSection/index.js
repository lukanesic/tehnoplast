import React from 'react'

const VideoSection = () => {
  return (
    <div className='video-section'>
      <video
        src={'images/video.mp4'}
        type='video/mp4'
        loop
        muted
        autoplay
        playsinline
      />
    </div>
  )
}

export default VideoSection
