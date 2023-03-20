import React, { useState } from 'react'
import Dropback from '../components/Dropback'
import Footer from '../components/Footer'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Sidemenu from '../components/Sidemenu'

const MainLayout = ({
  children,
  dark,
  footerTranslate,
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
  localeSrb,
  localeGer,
  hrefSrb,
  hrefGer,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dropback open={open} setOpen={setOpen} />
      <Sidemenu
        open={open}
        setOpen={setOpen}
        prozoriCat={prozoriCat}
        kapijeCat={kapijeCat}
        roletneCat={roletneCat}
        pregradeCat={pregradeCat}
        vrataCat={vrataCat}
        garaznaCat={garaznaCat}
        proizvodiH={proizvodiH}
        komarniciCat={komarniciCat}
        pocetnaH={pocetnaH}
        kontakt={kontakt}
        onama={onama}
        localeSrb={localeSrb}
        localeGer={localeGer}
        hrefSrb={hrefSrb}
        hrefGer={hrefGer}
      />
      <Nav open={open} setOpen={setOpen} dark={dark && dark} />
      {children}
      <Footer footerTranslate={footerTranslate} />
    </>
  )
}

export default MainLayout
