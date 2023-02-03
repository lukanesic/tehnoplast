import React from 'react'

import prozori from './../../public/images/prozori-hero.jpg'
import vrata from './../../public/images/vrata-hero.jpg'
import kapije from './../../public/images/ograda-hero.png'
import pregrade from './../../public/images/pregrad-hero.jpg'
import garazna from './../../public/images/garazna-hero-min.jpg'
import roletne from './../../public/images/roletne-hero.jpg'
import komarnici from './../../public/images/komarnici-hero.jpg'
import Image from 'next/image'

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
  {
    id: 3,
    title: 'Kapije',
    subtitle: 'Ograde, gelenderi i',
    src: kapije,
    alt: 'Tehnoplast Ograde, Gelenderi i Kapije PVC i ALU',
  },
  {
    id: 4,
    title: 'Sanitarne pregrade',
    subtitle: 'Fiksni, rolo i plisirani',
    src: pregrade,
    alt: 'Tehnoplast Pregrade PVC i ALU',
  },
  {
    id: 5,
    title: 'Garazna vrata',
    subtitle: 'Fiksni, rolo i plisirani',
    src: garazna,
    alt: 'Tehnoplast Garazna vrata PVC i ALU',
  },
  {
    id: 6,
    title: 'Roletne i kapaci',
    subtitle: 'Fiksni, rolo i plisirani',
    src: roletne,
    alt: 'Tehnoplast Roletne i kapaci PVC i ALU',
  },
  {
    id: 7,
    title: 'Komarnici',
    subtitle: 'Fiksni, rolo i plisirani',
    src: komarnici,
    alt: 'Tehnoplast Komarnici PVC i ALU',
  },
]

const Categories = () => {
  return (
    <div className='categories wrapper'>
      <div className='full'>
        <div className='slider-card'>
          <div className='slider-img full-img'>
            <Image
              src={prozori}
              alt={'Prozori Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Fiksni, rolo i plisirani</h6>
            <h2>Prozori</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>
      </div>

      <div className='divide-4'>
        <div className='slider-card'>
          <div className='slider-img'>
            <Image
              src={kapije}
              alt={'Tehnoplast Kapije'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Ograde, gelenderi i </h6>
            <h2>Kapije</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div className='slider-img'>
            <Image
              src={roletne}
              alt={'Roletne Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Fiksni, rolo i plisirani</h6>
            <h2>Roletne i kapaci</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div className='slider-img'>
            <Image
              src={pregrade}
              alt={'Sanitarne pregrade Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Fiksni, rolo i plisirani</h6>
            <h2>Sanitarne pregrade</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div className='slider-img'>
            <Image
              src={komarnici}
              alt={'Komarnici Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Fiksni, rolo i plisirani</h6>
            <h2>Komarnici</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>
      </div>

      <div className='divide-2'>
        <div className='slider-card'>
          <div className='slider-img half'>
            <Image
              src={vrata}
              alt={'Vrata Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Ulazna, sobna i klizna</h6>
            <h2>Vrata</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>
        <div className='slider-card'>
          <div className='slider-img half'>
            <Image
              src={garazna}
              alt={'Garazna vrata Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
            />
          </div>
          <div className='slider-info'>
            <h6>Ograde, gelenderi i </h6>
            <h2>Garazna vrata</h2>
            <div className='btn'>Pogledajte nase radove</div>
            <div className='underline'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories