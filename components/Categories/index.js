import React from 'react'

import prozori from './../../public/images/prozori-hero.jpg'
import vrata from './../../public/images/vrata-hero.jpg'
import kapije from './../../public/images/ograda-hero.png'
import pregrade from './../../public/images/pregrad-hero.jpg'
import garazna from './../../public/images/garazna-hero.jpg'
import roletne from './../../public/images/roletne-hero.jpg'
import komarnici from './../../public/images/komarnici-hero.png'
import Image from 'next/image'

import { useRouter } from 'next/router'

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

const Categories = ({
  prozoriCat,
  prozoriDesc,
  kapijeCat,
  kapijeDesc,
  roletneCat,
  roletneDesc,
  pregradeCat,
  pregradeDesc,
  komarniciCat,
  komarniciDesc,
  vrataCat,
  vrataDesc,
  garaznaCat,
  garaznaDesc,
  buttonDesc,
}) => {
  const router = useRouter()

  return (
    <div className='categories wrapper'>
      <div className='full'>
        <div className='slider-card'>
          <div
            className='slider-img full-img'
            onClick={() => router.push('/prozori')}
          >
            <div className='overlay' />
            <Image
              src={prozori}
              alt={'Prozori Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{prozoriDesc}</h6>
            <h2>{prozoriCat}</h2>
            <div className='btn' onClick={() => router.push('/prozori')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>
      </div>

      <div className='divide-4'>
        <div className='slider-card'>
          <div className='slider-img' onClick={() => router.push('/kapije')}>
            <div className='overlay' />
            <Image
              src={kapije}
              alt={'Tehnoplast Kapije'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{kapijeDesc}</h6>
            <h2>{kapijeCat}</h2>
            <div className='btn' onClick={() => router.push('/kapije')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div className='slider-img' onClick={() => router.push('/roletne')}>
            <div className='overlay' />
            <Image
              src={roletne}
              alt={'Roletne Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{roletneDesc}</h6>
            <h2>{roletneCat}</h2>
            <div className='btn' onClick={() => router.push('/roletne')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div
            className='slider-img'
            onClick={() => router.push('/sanitarne-pregrade')}
          >
            <div className='overlay' />
            <Image
              src={pregrade}
              alt={'Sanitarne pregrade Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{pregradeDesc}</h6>
            <h2>{pregradeCat}</h2>
            <div
              className='btn'
              onClick={() => router.push('/sanitarne-pregrade')}
            >
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>

        <div className='slider-card'>
          <div className='slider-img' onClick={() => router.push('/komarnici')}>
            <div className='overlay' />
            <Image
              src={komarnici}
              alt={'Komarnici Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{komarniciDesc}</h6>
            <h2>{komarniciCat}</h2>
            <div className='btn' onClick={() => router.push('/komarnici')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>
      </div>

      <div className='divide-2'>
        <div className='slider-card' onClick={() => router.push('/vrata')}>
          <div className='slider-img half'>
            <div className='overlay' />
            <Image
              src={vrata}
              alt={'Vrata Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{vrataDesc}</h6>
            <h2>{vrataCat}</h2>
            <div className='btn' onClick={() => router.push('/vrata')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>
        <div className='slider-card'>
          <div
            className='slider-img half'
            onClick={() => router.push('/garazna-vrata')}
          >
            <div className='overlay' />
            <Image
              src={garazna}
              alt={'Garazna vrata Tehnoplast'}
              layout='fill'
              objectPosition='center'
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='slider-info'>
            <h6>{garaznaDesc} </h6>
            <h2>{garaznaCat}</h2>
            <div className='btn' onClick={() => router.push('/garazna-vrata')}>
              {buttonDesc}
            </div>
            <div className='underline'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
