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
        heading={'Profili'}
        counterNum={''}
        counterDescription={''}
        boldDescription={'U ponudi i drvo-dekor pvc prozori. '}
        description={
          'U kombinaciji sa višeslojnim staklom izuzetnog kvaliteta, pružaju maksimalnu termičku i zvučnu izolaciju. Garantovana postojanost i otpornost na sve vremenske uslove'
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
        boldDescription={'Lorem ipsum dolor sit amet, '}
        description={
          'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />
    </MainLayout>
  )
}

export default Prozori
