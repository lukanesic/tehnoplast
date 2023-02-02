import React from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Dropback = ({ open, setOpen }) => {
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
          className='dropback'
          initial={{ opacity: 0 }}
          animate={{ opacity: '20%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={() => setOpen(!open)}
        ></motion.div>
      )}
    </AnimatePresence>
  )
}

export default Dropback
