import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidemenu = ({ open, setOpen }) => {
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
            <div className='close-btn'>X</div>
            <ul>
              <li>Prozori</li>
              <li>Vrata</li>
              <li>Garazna vrata</li>
              <li>Sanitarne pregrade</li>
              <li>Roletne</li>
              <li>Kapije i ograde</li>
              <li>Komarnici</li>
              <li>Trakaste zavese</li>

              <div className='info'>
                <a href='#' className='email'>
                  info@tehnoplast.co.rs
                </a>
                <a href='#' className='phone'>
                  +381 66 653 635
                </a>
              </div>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidemenu
