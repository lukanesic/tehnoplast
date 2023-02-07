import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import Profili from '../../components/Profili'
import MainLayout from './../../layout/MainLayout'

import prozori from './../../public/images/prozori-hero.jpg'
import profil1 from './../../public/images/prozori-profili/iconic-1.jpg'

const Prozori = () => {
  return (
    <MainLayout>
      <CategoryHero
        img={prozori}
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

      <Profili
        img={profil1}
        cls='profil'
        topInfoNum={'01'}
        topInfoDesc={'Visekomorni PVC prozori'}
        title={'Iconic w77 AI².'}
        botInfoDesc={'U ponudi i drvo-dekor pvc prozori.'}
        description1={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
        description2={
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />

      <Profili
        img={profil1}
        cls='profil'
        topInfoNum={'01'}
        topInfoDesc={'Visekomorni PVC prozori'}
        title={'Iconic w77 AI².'}
        botInfoDesc={'U ponudi i drvo-dekor pvc prozori.'}
        description1={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
        description2={
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />

      <Profili
        img={profil1}
        cls='profil'
        topInfoNum={'01'}
        topInfoDesc={'Visekomorni PVC prozori'}
        title={'Iconic w77 AI².'}
        botInfoDesc={'U ponudi i drvo-dekor pvc prozori.'}
        description1={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
        description2={
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />
    </MainLayout>
  )
}

export default Prozori
