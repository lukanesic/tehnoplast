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

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['vrata'])),
    },
  }
}

const Roletne = () => {
  const { t } = useTranslation()
  return (
    <MainLayout
      footerTranslate={t('vrata:footer_desc')}
      prozoriCat={t('vrata:prozori_cat')}
      kapijeCat={t('vrata:kapije_cat')}
      roletneCat={t('vrata:roletne_cat')}
      pregradeCat={t('vrata:pregrade_cat')}
      vrataCat={t('vrata:vrata_cat')}
      garaznaCat={t('vrata:garazna_cat')}
      proizvodiH={t('vrata:product_header')}
      komarniciCat={t('vrata:komarnici_cat')}
      pocetnaH={t('vrata:pocetna_header')}
      onama={t('vrata:onama_header')}
      kontakt={t('vrata:kontakt_header')}
    >
      <CategoryHero
        title={t('vrata:roletne_cat')}
        description={'Tehnoplast, Lapovo'}
        img={roletnehero}
      />

      <MarketSection
        heading={t('vrata:projects_header')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('vrata:project_header_bold')}
        description={t('vrata:project_header_desc')}
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
        heading={t('vrata:poslovanje_header')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('vrata:poslovanje_header_bold')}
        description={t('vrata:poslovanje_header_desc')}
      />
    </MainLayout>
  )
}

export default Roletne
