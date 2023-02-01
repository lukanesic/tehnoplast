import React from 'react'

const NavTest = ({ open, setOpen }) => {
  return (
    <nav>
      <div className='logo'>Logo</div>

      <div className='links-menu'>
        <ul>
          <li>Pocetna</li>
          <li>Proizvodi</li>
          <li>Referenca</li>
          <li>Kontakt</li>
        </ul>

        <div className='hamburger-btn'>
          <span>EN</span>
          <span className='sticky' onClick={() => setOpen(!open)}>
            Menu
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavTest
