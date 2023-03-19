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

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Tehnoplast</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainLayout>
        <Hero />

        <Link href='/' locale='de'>
          To german
        </Link>

        <Link href='/' locale='sr'>
          To serbian
        </Link>

        <MarketSection
          heading={t('home:product_header')}
          counterNum={'20+'}
          counterDescription={t('home:exp_header')}
          boldDescription={t('home:product_desc_h')}
          description={t('home:product_desc')}
        />

        <MobileSlider />
        <Categories />
        <MarketSection
          heading={'Proizvodnja'}
          counterNum={'50+'}
          counterDescription={'zaposlenih'}
          boldDescription={'Naša proizvodnja '}
          description={
            'je posvećena sofisticiranim proizvodima od pvc i alu najvišeg kvaliteta.'
          }
        />

        <VideoSection src={'images/video.mp4'} />

        <MarketSection
          heading={'Po Vašoj meri'}
          counterNum={'1000+'}
          counterDescription={'mušterija'}
          boldDescription={'Naši proizvodi '}
          description={'dolaze u bojama i dimenzijama koje vi izaberete.'}
        />
      </MainLayout>
    </>
  )
}
