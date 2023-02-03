import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import prozori from './../../public/images/prozori-hero.jpg'
import vrata from './../../public/images/vrata-hero.jpg'

const data = [
  {
    id: 1,
    title: 'Prozori',
    subtitle: 'Fiksni, rolo i plisirani',
    src: prozori,
    alt: 'Tehnoplast Prozori PVC i ALU',
  },
  {
    id: 2,
    title: 'Vrata',
    subtitle: 'Ulazna, sobna i klizna',
    src: vrata,
    alt: 'Tehnoplast Vrata PVC i ALU',
  },
]

const MobileSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  }

  return (
    <div className='mobile-slider wrapper'>
      {data.map((category) => (
        <SliderCard
          key={category.id}
          title={category.title}
          subtitle={category.subtitle}
          src={category.src}
          alt={category.alt}
        />
      ))}
    </div>
  )
}

export default MobileSlider

const SliderCard = ({ src, alt, title, subtitle }) => {
  return (
    <div className='slider-card'>
      <div className='slider-img'>
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
      <div className='slider-info'>
        <h6>{subtitle}</h6>
        <h2>{title}</h2>
        <div className='btn'>Pogledajte nase radove</div>
        <div className='underline'></div>
      </div>
    </div>
  )
}
