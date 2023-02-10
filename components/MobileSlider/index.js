import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import prozori from './../../public/images/prozori-hero.jpg'
import vrata from './../../public/images/vrata-hero.jpg'
import kapije from './../../public/images/ograda-hero.png'
import pregrade from './../../public/images/pregrad-hero.jpg'
import garazna from './../../public/images/garazna-hero.jpg'
import roletne from './../../public/images/roletne-hero.jpg'
import komarnici from './../../public/images/komarnici-hero.jpg'

import { useRouter } from 'next/router'

const data = [
  {
    id: 1,
    title: 'Prozori',
    subtitle: 'Fiksni, rolo i plisirani',
    src: prozori,
    alt: 'Tehnoplast Prozori PVC i ALU',
    link: '/prozori',
  },
  {
    id: 2,
    title: 'Vrata',
    subtitle: 'Ulazna, sobna i klizna',
    src: vrata,
    alt: 'Tehnoplast Vrata PVC i ALU',
    link: '/vrata',
  },
  {
    id: 3,
    title: 'Garazna vrata',
    subtitle: 'Fiksni, rolo i plisirani',
    src: garazna,
    alt: 'Tehnoplast Garazna vrata PVC i ALU',
    link: '/garazna-vrata',
  },
  {
    id: 4,
    title: 'Roletne i kapaci',
    subtitle: 'Fiksni, rolo i plisirani',
    src: roletne,
    alt: 'Tehnoplast Roletne i kapaci PVC i ALU',
    link: '/roletne',
  },
  {
    id: 5,
    title: 'Kapije',
    subtitle: 'Ograde, gelenderi i',
    src: kapije,
    alt: 'Tehnoplast Ograde, Gelenderi i Kapije PVC i ALU',
  },
  {
    id: 6,
    title: 'Sanitarne pregrade',
    subtitle: 'Fiksni, rolo i plisirani',
    src: pregrade,
    alt: 'Tehnoplast Pregrade PVC i ALU',
  },

  {
    id: 7,
    title: 'Komarnici',
    subtitle: 'Fiksni, rolo i plisirani',
    src: komarnici,
    alt: 'Tehnoplast Komarnici PVC i ALU',
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
          link={category.link}
        />
      ))}
    </div>
  )
}

export default MobileSlider

const SliderCard = ({ src, alt, title, subtitle, link }) => {
  const router = useRouter()
  return (
    <div className='slider-card'>
      <div className='slider-img' onClick={() => router.push(link)}>
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
        <div className='btn' onClick={() => router.push(link)}>
          Pogledajte nase radove
        </div>
        <div className='underline'></div>
      </div>
    </div>
  )
}
