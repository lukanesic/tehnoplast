import React from 'react'
import Image from 'next/image'

import logo from './../../public/images/tehnoplast-logo.png'
import { Squeeze as Hamburger } from 'hamburger-react'

const Nav = ({ open, setOpen }) => {
  return (
    <nav>
      <div className='wrapper nav'>
        <div className='normal-logo'>
          <Image src={logo} alt={'Tehnoplast logo'} fill objectFit='contain' />
        </div>
        <div className='circle'>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={18}
            hideOutline={false}
            color='#fff'
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
