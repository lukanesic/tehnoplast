import Image from 'next/image'
import React from 'react'
import logo from './../../public/images/tehnoplast-logo-dark.png'

const Footer = ({ footerTranslate }) => {
  return (
    <footer>
      <div className='footer-container wrapper'>
        <div className='normal-logo'>
          {' '}
          <Image src={logo} alt={'Tehnoplast logo'} fill objectFit='cover' />
        </div>
        <p>{footerTranslate} </p>
        <a href='mailto:info@tehnoplast.co.rs' className='email'>
          info@tehnoplast.co.rs{' '}
        </a>
        <a href='tel:+38162466555' className='tele'>
          +381 62 466 555
        </a>
        <div className='socials'>
          <div className='s-icon insta' />
          <div className='s-icon face' />
        </div>
      </div>
      <div className='copy-r wrapper'>
        <h6>@ 2023 Tehnoplast, Lapovo</h6>
        <h6>
          Design & Development{' '}
          <span className='bold'>
            {' '}
            <a href='mailto:lukannesic@gmail.com' className='email'>
              Luka Nešić{' '}
            </a>
          </span>
        </h6>
      </div>
    </footer>
  )
}

export default Footer
