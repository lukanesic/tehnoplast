import React from 'react'
import NavTest from '../NavTest'

const BgTest = ({ color, heading, nav, open, setOpen }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: '100vh',
        width: '100vw',
      }}
    >
      {nav && <NavTest open={open && open} setOpen={setOpen && setOpen} />}
      {/* <h1 style={{ color: '#fff' }}>{heading}</h1> */}
    </div>
  )
}

export default BgTest
