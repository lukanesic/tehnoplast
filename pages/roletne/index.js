import Image from 'next/image'
import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import MainLayout from '../../layout/MainLayout'

import roletnehero from './../../public/images/roletne-hero.jpg'
import test1 from './../../public/images/test1.jpg'
import test2 from './../../public/images/test2.jpg'
import test3 from './../../public/images/test3.jpg'
import test4 from './../../public/images/test4.jpg'
import test5 from './../../public/images/test5.png'
import test6 from './../../public/images/test6.jpg'

const Roletne = () => {
  return (
    <MainLayout>
      <CategoryHero
        title={'Roletne i kapaci'}
        description={'Tehnoplast, Lapovo'}
        img={roletnehero}
      />

      <MarketSection
        heading={'Projekti'}
        counterNum={''}
        counterDescription={''}
        boldDescription={'U ponudi i drvo-dekor pvc prozori. '}
        description={
          'U kombinaciji sa višeslojnim staklom izuzetnog kvaliteta, pružaju maksimalnu termičku i zvučnu izolaciju. Garantovana postojanost i otpornost na sve vremenske uslove'
        }
      />

      <div className='o-nama-section wrapper'>
        <div className='o-nama-l'>
          <Image
            src={test1}
            alt={`Tehnoplast`}
            fill
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
        </div>
        <div className='o-nama-r'>
          <div className='o-nama-r-top'>
            <Image
              src={test2}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='o-nama-r-bot'>
            <Image
              src={test3}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
        </div>
      </div>

      <div className='o-nama-section wrapper'>
        <div className='o-nama-l'>
          <Image
            src={test4}
            alt={`Tehnoplast`}
            fill
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
        </div>
        <div className='o-nama-r'>
          <div className='o-nama-r-top'>
            <Image
              src={test5}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='o-nama-r-bot'>
            <Image
              src={test6}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
        </div>
      </div>

      <MarketSection
        heading={'Zasto poslovati sa nama'}
        counterNum={''}
        counterDescription={''}
        boldDescription={'Lorem ipsum dolor sit amet, '}
        description={
          'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />
    </MainLayout>
  )
}

export default Roletne
