import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import Profili from '../../components/Profili'
import MainLayout from './../../layout/MainLayout'

import ProzoriHero from './../../public/images/prozori-hero.jpg'

import { prozori } from './../../data/prozori'

const Prozori = () => {
  return (
    <MainLayout>
      <CategoryHero
        img={ProzoriHero}
        title={'Prozori'}
        description={
          'Visekomorni PVC prozori proizvedeni po najsavremenijoj tehnologiji.'
        }
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

      {prozori.map((prozor) => (
        <Profili
          key={prozor.id}
          img={prozor.profil}
          topInfoNum={prozor.topInfoNum}
          topInfoDesc={prozor.topInfoDesc}
          title={prozor.title}
          botInfoDesc={prozor.botInfoDesc}
          description1={prozor.description1}
          description2={prozor.description2}
          cls={prozor.cls}
          link={prozor.link}
        />
      ))}

      <MarketSection
        heading={'Zasto poslovati sa nama'}
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

export default Prozori
