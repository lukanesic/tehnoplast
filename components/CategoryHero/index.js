import React from 'react'
import Image from 'next/image'

const CategoryHero = ({ img, title, description, dark }) => {
  return (
    <div className='category-hero'>
      {img && (
        <Image
          src={img}
          alt={`${title} Tehnoplast`}
          fill
          objectFit='cover'
          style={{ zIndex: '-10' }}
        />
      )}

      <div className='hero-info wrapper'>
        {dark && (
          <>
            <h1 className='h1-heading dark'>{title}.</h1>
            <p className='p dark'>{description}</p>
          </>
        )}

        {!dark && (
          <>
            <h1 className='h1-heading'>{title}.</h1>
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default CategoryHero
