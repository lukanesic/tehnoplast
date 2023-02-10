import React from 'react'
import Image from 'next/image'

import logo from './../../public/images/tehnoplast-logo.png'
import darklogo from './../../public/images/tehnoplast-logo-dark.png'
import { Squeeze as Hamburger } from 'hamburger-react'

const Nav = ({ open, setOpen, dark }) => {
  return (
    <nav>
      <div className='wrapper nav'>
        <div className='normal-logo'>
          {!dark && (
            <Image
              src={logo}
              alt={'Tehnoplast logo'}
              fill
              objectFit='contain'
            />
          )}
          {dark && (
            <Image
              src={darklogo}
              alt={'Tehnoplast logo'}
              fill
              objectFit='contain'
            />
          )}
        </div>

        <div className='select-lang'>
          <span>Jezik: SRB</span>
        </div>

        <div className='circle' onClick={() => setOpen(!open)}>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={22}
            hideOutline={false}
            color='#fff'
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
