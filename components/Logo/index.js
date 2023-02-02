import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import logo from './../../public/images/tehnoplast-logo.png'
import Image from 'next/image'

const Logo = ({ dblogo, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='logo'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ position: `${dblogo ? 'fixed' : 'absolute'}` }}
        >
          <Image
            src={logo}
            alt={'Tehnoplast Logo'}
            fill
            objectFit={'contain'}
            objectPosition='center'
            style={{ zIndex: '95' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Logo
