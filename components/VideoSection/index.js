import React from 'react'

const VideoSection = ({ src }) => {
  return (
    <div className='video-section'>
      <video loop muted autoPlay playsInline src={src} type='video/mp4' />
    </div>
  )
}

export default VideoSection
