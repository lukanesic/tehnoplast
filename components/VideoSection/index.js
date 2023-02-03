import React from 'react'

const VideoSection = () => {
  return (
    <div className='video-section'>
      <video src={'images/video.mp4'} type='video/mp4' autoPlay loop muted />
    </div>
  )
}

export default VideoSection
