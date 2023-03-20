import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import MainLayout from './../../layout/MainLayout'

import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'
import Image from 'next/image'
import location from './../../public/images/loc.jpg'
import kontakt from './../../public/images/kontakt.jpg'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact'])),
    },
  }
}

const Kontakt = () => {
  const { t } = useTranslation()
  return (
    <MainLayout
      footerTranslate={t('contact:footer_desc')}
      prozoriCat={t('contact:prozori_cat')}
      kapijeCat={t('contact:kapije_cat')}
      roletneCat={t('contact:roletne_cat')}
      pregradeCat={t('contact:pregrade_cat')}
      vrataCat={t('contact:vrata_cat')}
      garaznaCat={t('contact:garazna_cat')}
      proizvodiH={t('contact:product_header')}
      komarniciCat={t('contact:komarnici_cat')}
      pocetnaH={t('contact:pocetna_header')}
      onama={t('contact:onama_header')}
      kontakt={t('contact:kontakt_header')}
    >
      <CategoryHero
        title={t('contact:kontakt_header')}
        description={t('contact:budimo')}
        img={kontakt}
      />
      <MarketSection
        heading={'Tehnoplast'}
        boldDescription={t('contact:contact_bold')}
        description={t('contact:contact_desc')}
      />

      <div className='kontakt-content wrapper'>
        <div className='box'>
          <h6>{t('contact:social')}</h6>
          <p>{t('contact:social_desc')}</p>
          <span>
            <FaFacebookF className='icon' />{' '}
            <a
              href='https://www.facebook.com/tehnoplast.co.rs/'
              target='_blank'
              rel='noreferrer'
            >
              tehnoplast.facebook
            </a>
          </span>
          <span>
            <FaInstagram className='icon' />{' '}
            <a
              href='https://www.instagram.com/tehnoplast.co.rs'
              target='_blank'
              rel='noreferrer'
            >
              tehnoplast.instagram
            </a>
          </span>
        </div>
        <div className='box'>
          <h6>{t('contact:email')}</h6>
          <p>{t('contact:email_desc')}</p>
          <span>
            <a href='mailto:info@tehnoplast.co.rs' className='mail'>
              info@tehnoplast.co.rs
            </a>
          </span>
        </div>
        <div className='box'>
          <h6>{t('contact:phone')}</h6>
          <p>{t('contact:phone_desc')}</p>
          <span>
            <HiOutlinePhone className='icon' />{' '}
            <a href='tel:+38163601283'>+381 63 601 283, Ivan</a>
          </span>
          <span>
            <HiOutlinePhone className='icon' />{' '}
            <a href='tel:+38162466555'>+381 62 466 555, Stefan</a>
          </span>
          <span>
            <HiOutlinePhone className='icon' />{' '}
            <a href='tel:+38134852123'>+ 381 34 852 123, Tel/Fax</a>
          </span>
        </div>
      </div>

      <MarketSection
        heading={t('contact:loc_h')}
        boldDescription={'Ul. Kosovskih junaka br. 20, 34220 Lapovo'}
        description={''}
      />

      <div className='location'>
        <Image
          src={location}
          alt={`Lokacija Tehnoplast`}
          fill
          objectFit='cover'
          style={{ zIndex: '-10' }}
        />
      </div>

      <MarketSection
        heading={t('contact:poslovanje_header')}
        counterNum={''}
        counterDescription={''}
        boldDescription={t('contact:poslovanje_header_bold')}
        description={t('contact:poslovanje_header_desc')}
      />
    </MainLayout>
  )
}

export default Kontakt
