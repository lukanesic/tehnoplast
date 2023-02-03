import Head from 'next/head'
import Hero from '../components/Hero'
import MarketSection from '../components/MarketSection'
import MobileSlider from '../components/MobileSlider'

import MainLayout from '../layout/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tehnoplast</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainLayout>
        <Hero />
        <MarketSection
          heading={'Proizvodi'}
          counterNum={'20'}
          counterDescription={'godina iskustva'}
          boldDescription={'Naša proizvodnja '}
          description={
            'je posvećena sofisticiranim proizvodima od pvc i alu najvišeg kvaliteta.'
          }
        />
        <MobileSlider />
      </MainLayout>
    </>
  )
}
