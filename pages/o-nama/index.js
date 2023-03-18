import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import MainLayout from './../../layout/MainLayout'

import onama from './../../public/images/onama.jpg'
import Image from 'next/image'

import tehnoleft from './../../public/images/tehnoplast.jpg'
import tehnor3 from './../../public/images/tehnoplast3.png'
import tehnor2 from './../../public/images/tehnoplast2.png'
import VideoSection from '../../components/VideoSection'

const Onama = () => {
  return (
    <MainLayout>
      <CategoryHero
        title={'Na Vašoj strani'}
        description={'Tehnoplast, Lapovo'}
        img={onama}
      />
      <MarketSection
        heading={'Tehnoplast'}
        counterNum={'20+'}
        counterDescription={'godina iskustva'}
        boldDescription={'Firma Tehnoplast '}
        description={
          'se bavi proizvodnjom i ugradnjom ALU i PVC stolarije od 2001. godine. Na osnovu našeg iskustva možemo Vam garantovati kvalitet naših proizvoda.'
        }
      />

      <div className='o-nama-section wrapper'>
        <div className='o-nama-l'>
          <Image
            src={tehnoleft}
            alt={`Tehnoplast`}
            fill
            objectFit='cover'
            style={{ zIndex: '-10' }}
          />
        </div>
        <div className='o-nama-r'>
          <div className='o-nama-r-top'>
            <Image
              src={tehnor3}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
          <div className='o-nama-r-bot'>
            <Image
              src={tehnor2}
              alt={`Tehnoplast`}
              fill
              objectFit='cover'
              style={{ zIndex: '-10' }}
            />
          </div>
        </div>
      </div>

      <MarketSection
        heading={'Poslovanje'}
        counterNum={'500+'}
        counterDescription={'uspesnih projekata'}
        boldDescription={'Pored toga '}
        description={
          'što radimo po standardima Evropske unije i zadovoljavamo lične zahteve klijenata - sada imamo mogućnosti i da vam na više mesta u Evropi pokažemo naše sisteme i dokažemo kvalitet čak i pre poručivanja stolarije za vaše objekte'
        }
      />

      <VideoSection src={'images/onama-video.mp4'} />
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

export default Onama
