import React from 'react'
import Image from 'next/image'

const Profili = ({
  cls,
  img,
  title,
  topInfoNum,
  topInfoDesc,
  botInfoDesc,
  description1,
  description2,
}) => {
  return (
    <div className={`${cls} wrapper`}>
      <div className='profil-img'>
        <Image src={img} alt={`${title} Tehnoplast`} fill objectFit='cover' />
      </div>
      <div className='profil-info'>
        <div className='top-profil-info'>
          <span className='light'>{topInfoNum}</span>
          <div className='profil-line' />
          <span className='semi'>{topInfoDesc}</span>
        </div>
        <h3>{title}</h3>
        <span className='biger'>{botInfoDesc}</span>
        <p>{description1}</p>
        <p>{description2}</p>
        <div className='profil-btn'>Saznajte vise</div>
      </div>
    </div>
  )
}

export default Profili
