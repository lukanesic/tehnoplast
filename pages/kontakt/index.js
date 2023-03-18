import React from 'react'
import CategoryHero from '../../components/CategoryHero'
import MarketSection from '../../components/MarketSection'
import MainLayout from './../../layout/MainLayout'

import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'
import Image from 'next/image'
import location from './../../public/images/loc.jpg'
import kontakt from './../../public/images/kontakt.jpg'

const Kontakt = () => {
  return (
    <MainLayout>
      <CategoryHero
        title={'Kontakt'}
        description={'Budimo u kontaktu'}
        img={kontakt}
      />
      <MarketSection
        heading={'Tehnoplast'}
        boldDescription={'Budite u kontaktu '}
        description={'sa nama na više načina.'}
      />

      <div className='kontakt-content wrapper'>
        <div className='box'>
          <h6>Putem društevnih mreža</h6>
          <p>
            Budite slobodni da postetite nase profile i ostvarite kontakt sa
            nama.
          </p>
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
          <h6>Putem Email-a</h6>
          <p>Budite slobodni da nas kontaktirate putem email-a.</p>
          <span>
            <a href='mailto:info@tehnoplast.co.rs' className='mail'>
              info@tehnoplast.co.rs
            </a>
          </span>
        </div>
        <div className='box'>
          <h6>Putem Telefona</h6>
          <p>Budite slobodni da nas pozovete na sledece brojeve</p>
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
        heading={'Pronađite nas'}
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
        heading={'Zašto poslovati sa nama'}
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

export default Kontakt
