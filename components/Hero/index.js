import React from 'react'
import Image from 'next/image'

import hero from './../../public/images/hero.jpg'

const Hero = () => {
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
        <h1 className='h1-heading'>Na Vašoj strani.</h1>
        <p>
          Firma Tehnoplast se bavi proizvodnjom i ugradnjom ALU i PVC stolarije
          od 2001. godine. Na osnovu našeg iskustva možemo Vam garantovati
          kvalitet naših proizvoda.
        </p>
      </div>
    </div>
  )
}

export default Hero
