import React from 'react'

const VideoSection = () => {
  return (
    <div className='video-section'>
      <video
        loop={true}
        muted={true}
        autoPlay={true}
        data-autoplay=''
        playsInline={true}
        src={'images/video.mp4'}
        type='video/mp4'
      />
    </div>
  )
}

export default VideoSection
