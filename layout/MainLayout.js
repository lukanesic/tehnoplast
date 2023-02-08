import React, { useState } from 'react'
import Dropback from '../components/Dropback'
import Footer from '../components/Footer'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Sidemenu from '../components/Sidemenu'

const MainLayout = ({ children, dark }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dropback open={open} setOpen={setOpen} />
      <Sidemenu open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} dark={dark && dark} />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
