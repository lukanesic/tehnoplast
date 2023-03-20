import React from 'react'
import Image from 'next/image'

import hero from './../../public/images/hero.jpg'

const Hero = ({ heading, description }) => {
  return (
    <div className='hero'>
      <Image
        src={hero}
        alt={'Tehnoplast firma'}
        fill
        objectFit='cover'
        style={{ zIndex: '-10' }}
      />
      <div className='hero-info wrapper'>
        <h1 className='h1-heading'>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hero
