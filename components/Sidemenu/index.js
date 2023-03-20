import React from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import Image from 'next/image'
import logo from './../../public/images/tehnoplast-logo-dark.png'

const Sidemenu = ({
  open,
  setOpen,
  prozoriCat,
  kapijeCat,
  roletneCat,
  pregradeCat,
  vrataCat,
  garaznaCat,
  komarniciCat,
  proizvodiH,
  pocetnaH,
  kontakt,
  onama,
}) => {
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
                    <li>{pocetnaH}</li>
                  </Link>

                  <Link href={'/o-nama'}>
                    {' '}
                    <li>{onama}</li>
                  </Link>
                  <Link href={'/kontakt'}>
                    {' '}
                    <li>{kontakt}</li>
                  </Link>
                </div>

                <div className='info'>
                  <a className='email' href='mailto:info@tehnoplast.co.rs'>
                    info@tehnoplast.co.rs
                  </a>
                  <a href='tel:+38162466555' className='phone'>
                    +381 62 466 555
                  </a>
                </div>
              </ul>
              <ul className='large-menu'>
                <h6 className='menu-heading'>{proizvodiH}</h6>
                <Link href='/prozori'>
                  {' '}
                  <li>{prozoriCat}</li>
                </Link>

                <Link href='/vrata'>
                  {' '}
                  <li>{vrataCat}</li>
                </Link>
                <Link href='/garazna-vrata'>
                  {' '}
                  <li>{garaznaCat}</li>
                </Link>

                <Link href='/roletne'>
                  {' '}
                  <li>{roletneCat}</li>
                </Link>
                <Link href='/sanitarne-pregrade'>
                  {' '}
                  <li>{pregradeCat}</li>
                </Link>
                <Link href='/kapije'>
                  {' '}
                  <li>{kapijeCat}</li>
                </Link>
                <Link href='/komarnici'>
                  {' '}
                  <li>{komarniciCat}</li>
                </Link>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidemenu
