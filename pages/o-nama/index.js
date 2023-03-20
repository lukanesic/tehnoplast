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

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  }
}

const Onama = () => {
  const { t } = useTranslation()
  return (
    <MainLayout
      footerTranslate={t('about:footer_desc')}
      prozoriCat={t('about:prozori_cat')}
      kapijeCat={t('about:kapije_cat')}
      roletneCat={t('about:roletne_cat')}
      pregradeCat={t('about:pregrade_cat')}
      vrataCat={t('about:vrata_cat')}
      garaznaCat={t('about:garazna_cat')}
      proizvodiH={t('about:product_header')}
      komarniciCat={t('about:komarnici_cat')}
      pocetnaH={t('about:pocetna_header')}
      onama={t('about:onama_header')}
      kontakt={t('about:kontakt_header')}
    >
      <CategoryHero
        title={t('about:ladning_h')}
        description={'Tehnoplast, Lapovo'}
        img={onama}
      />
      <MarketSection
        heading={'Tehnoplast'}
        counterNum={'20+'}
        counterDescription={t('about:godine_h')}
        boldDescription={t('about:bold_h')}
        description={t('about:about_desc')}
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
        heading={t('about:poslovanje_header')}
        counterNum={'500+'}
        counterDescription={t('about:poslovanje_uspesnih')}
        boldDescription={t('about:poslovanje_bold')}
        description={t('about:poslovanje_desc')}
      />

      <VideoSection src={'images/onama-video.mp4'} />

      <MarketSection
        heading={t('about:poslov_h')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('about:poslov_h_bold')}
        description={t('about:poslovanje_header_desc')}
      />
    </MainLayout>
  )
}

export default Onama
