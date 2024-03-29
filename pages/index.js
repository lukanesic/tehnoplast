import Head from 'next/head'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import MarketSection from '../components/MarketSection'
import MobileSlider from '../components/MobileSlider'
import VideoSection from '../components/VideoSection'

import MainLayout from '../layout/MainLayout'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  }
}

export default function Home({ locale }) {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Tehnoplast</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainLayout
        footerTranslate={t('home:footer_desc')}
        prozoriCat={t('home:prozori_cat')}
        kapijeCat={t('home:kapije_cat')}
        roletneCat={t('home:roletne_cat')}
        pregradeCat={t('home:pregrade_cat')}
        vrataCat={t('home:vrata_cat')}
        garaznaCat={t('home:garazna_cat')}
        proizvodiH={t('home:product_header')}
        komarniciCat={t('home:komarnici_cat')}
        pocetnaH={t('home:pocetna_header')}
        onama={t('home:onama_header')}
        kontakt={t('home:kontakt_header')}
        localeSrb={'/sr'}
        localeGer={'/de'}
        hrefSrb={'/'}
        hrefGer={'/'}
      >
        <Hero
          heading={t('home:ladning_h')}
          description={t('home:ladning_desc')}
        />

        <MarketSection
          heading={t('home:product_header')}
          counterNum={'20+'}
          counterDescription={t('home:exp_header')}
          boldDescription={t('home:product_desc_h')}
          description={t('home:product_desc')}
        />

        <MobileSlider
          prozoriCat={t('home:prozori_cat')}
          prozoriDesc={t('home:prozori_cat_desc')}
          kapijeCat={t('home:kapije_cat')}
          kapijeDesc={t('home:kapije_cat_desc')}
          roletneCat={t('home:roletne_cat')}
          roletneDesc={t('home:roletne_cat_desc')}
          pregradeCat={t('home:pregrade_cat')}
          pregradeDesc={t('home:pregrade_cat_desc')}
          komarniciCat={t('home:komarnici_cat')}
          komarniciDesc={t('home:komarnici_cat_desc')}
          vrataCat={t('home:vrata_cat')}
          vrataDesc={t('home:vrata_cat_desc')}
          garaznaCat={t('home:garazna_cat')}
          garaznaDesc={t('home:garazna_cat_desc')}
          buttonDesc={t('home:cat_button')}
        />

        <Categories
          prozoriCat={t('home:prozori_cat')}
          prozoriDesc={t('home:prozori_cat_desc')}
          kapijeCat={t('home:kapije_cat')}
          kapijeDesc={t('home:kapije_cat_desc')}
          roletneCat={t('home:roletne_cat')}
          roletneDesc={t('home:roletne_cat_desc')}
          pregradeCat={t('home:pregrade_cat')}
          pregradeDesc={t('home:pregrade_cat_desc')}
          komarniciCat={t('home:komarnici_cat')}
          komarniciDesc={t('home:komarnici_cat_desc')}
          vrataCat={t('home:vrata_cat')}
          vrataDesc={t('home:vrata_cat_desc')}
          garaznaCat={t('home:garazna_cat')}
          garaznaDesc={t('home:garazna_cat_desc')}
          buttonDesc={t('home:cat_button')}
        />

        <MarketSection
          heading={t('home:production_header')}
          counterNum={'50+'}
          counterDescription={t('home:zaposlenih_header')}
          boldDescription={t('home:production_bold_desc')}
          description={t('home:production_desc')}
        />

        <VideoSection src={'images/video.mp4'} />

        <MarketSection
          heading={t('home:mera_header')}
          counterNum={'1000+'}
          counterDescription={t('home:klijenti_translate')}
          boldDescription={t('home:klijenti_bold_desc')}
          description={t('home:mera_desc')}
        />
      </MainLayout>
    </>
  )
}
