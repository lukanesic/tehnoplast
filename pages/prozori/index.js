import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import Profili from '../../components/Profili'
import MainLayout from './../../layout/MainLayout'

import ProzoriHero from './../../public/images/prozori-hero.jpg'

import { prozori } from './../../data/prozori'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['prozori'])),
    },
  }
}

const Prozori = () => {
  const { t } = useTranslation()
  return (
    <MainLayout
      footerTranslate={t('prozori:footer_desc')}
      prozoriCat={t('prozori:prozori_cat')}
      kapijeCat={t('prozori:kapije_cat')}
      roletneCat={t('prozori:roletne_cat')}
      pregradeCat={t('prozori:pregrade_cat')}
      vrataCat={t('prozori:vrata_cat')}
      garaznaCat={t('prozori:garazna_cat')}
      proizvodiH={t('prozori:product_header')}
      komarniciCat={t('prozori:komarnici_cat')}
      pocetnaH={t('prozori:pocetna_header')}
      onama={t('prozori:onama_header')}
      kontakt={t('prozori:kontakt_header')}
    >
      <CategoryHero
        img={ProzoriHero}
        title={t('prozori:prozori_cat')}
        description={t('prozori:prozori_page_desc')}
      />
      <MarketSection
        heading={t('prozori:projects_header')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('prozori:project_header_bold')}
        description={t('prozori:project_header_desc')}
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
        heading={t('prozori:poslovanje_header')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('prozori:poslovanje_header_bold')}
        description={t('prozori:poslovanje_header_desc')}
      />
    </MainLayout>
  )
}

export default Prozori
