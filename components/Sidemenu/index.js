import React from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import Image from 'next/image'
import logo from './../../public/images/tehnoplast-logo-dark.png'

const Sidemenu = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      const width = document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.width = `${width}px`
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }

    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='sidemenu'
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className='menu-container'>
            <motion.div
              className='normal-logo'
              initial={{ opacity: 0 }}
              animate={{ opacity: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Image
                src={logo}
                alt={'Tehnoplast logo'}
                fill
                objectFit='contain'
              />
            </motion.div>

            <div className='two-menus'>
              <ul className='small-menu'>
                <div>
                  <h6 className='menu-heading'>Menu</h6>
                  <Link href={'/'}>
                    {' '}
                    <li>Početna</li>
                  </Link>

                  <li>Referenca</li>
                  <Link href={'/o-nama'}>
                    {' '}
                    <li>O Nama</li>
                  </Link>
                  <Link href={'/kontakt'}>
                    {' '}
                    <li>Kontakt</li>
                  </Link>
                </div>

                <div className='info'>
                  <a href='#' className='email'>
                    info@tehnoplast.co.rs
                  </a>
                  <a href='#' className='phone'>
                    +381 66 653 635
                  </a>
                </div>
              </ul>
              <ul className='large-menu'>
                <h6 className='menu-heading'>Proizvodi</h6>
                <Link href='/prozori'>
                  {' '}
                  <li>Prozori</li>
                </Link>

                <li>Vrata</li>
                <li>Garazna vrata</li>
                <li>Sanitarne pregrade</li>
                <li>Roletne</li>
                <li>Kapije i ograde</li>
                <li>Komarnici</li>
                <li>Trakaste zavese</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidemenu
