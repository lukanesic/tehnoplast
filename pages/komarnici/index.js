import Image from 'next/image'
import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import MainLayout from '../../layout/MainLayout'

import komarnici from './../../public/images/komarnici-hero.png'
import test1 from './../../public/images/komarnici/test1.png'
import test2 from './../../public/images/komarnici/test2.png'
import test3 from './../../public/images/komarnici/test3.png'
import test4 from './../../public/images/komarnici/test4.png'
import test5 from './../../public/images/komarnici/test5.png'
import test6 from './../../public/images/komarnici/test6.png'

const Komarnici = () => {
  return (
    <MainLayout>
      <CategoryHero
        title={'Komarnici'}
        description={'Tehnoplast, Lapovo'}
        img={komarnici}
      />

      <MarketSection
        heading={'Projekti'}
        counterNum={''}
        counterDescription={''}
        boldDescription={'Naši PVC i ALU '}
        description={
          'projekti se kreću od ugradnje prozora i vrata, kliznih vrata, kapija, roletni do izrade po meri za stambene i poslovne klijente.'
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
        heading={'Zašto poslovati sa nama'}
        counterNum={''}
        counterDescription={''}
        boldDescription={'Mi smo tim iskusnih profesionalaca '}
        description={
          'koji su posvećeni pružanju izuzetnih rezultata, bilo da se radi o ugradnji prozora i vrata ili pružanju ostalih usluga iz našeg poslovanja. Naš cilj je da nadmašimo vaša očekivanja i stvorimo trajne odnose sa našim klijentima.'
        }
      />
    </MainLayout>
  )
}

export default Komarnici
