import React from 'react'
import { animate } from 'framer-motion'
import { useRef } from 'react'

const MarketSection = ({
  heading,
  counterNum,
  counterDescription,
  description,
  boldDescription,
}) => {
  return (
    <div className='market-section wrapper'>
      <h2 className='h2-heading'>{heading}</h2>

      <div className='number-counter'>
        <h5>{counterNum}</h5> <span>{counterDescription}</span>
      </div>
      <p>
        <span>{boldDescription}</span>
        {description}
      </p>
    </div>
  )
}

export default MarketSection
