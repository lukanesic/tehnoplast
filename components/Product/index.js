import Image from 'next/image'
import React from 'react'
import test from './../../public/images/prozori-profili/iconic-1.jpg'

import thermo from './../../public/images/prozori-profili/thermo.jpg'
import duration from './../../public/images/prozori-profili/duration.jpg'

const Product = ({ data }) => {
  return (
    <div className='wrapper'>
      <ProductTopSection data={data[0]} />
      <ProductMidSection data={data[0]} />
      <ProductBotSection data={data[0]} cls={'bot-section'} />
      <ProductBotSection data={data[0]} cls={'bot-section reverse'} />
    </div>
  )
}

export default Product

const ProductTopSection = ({ data }) => {
  console.log(data)

  return (
    <div className='p-top-section'>
      <div className='profil-img'>
        <Image
          src={data && data.profil.src}
          alt={data && data.title}
          fill
          objectFit='cover'
        />
      </div>
      <div className='profil-info'>
        <div className='top-profil-info'>
          <span className='light'>{data && data.topInfoNum}</span>
          <div className='profil-line' />
          <span className='semi'>{data && data.topInfoDesc}</span>
        </div>
        <h3>{data && data.title}</h3>

        <p>{data && data.description1}</p>
        <p>{data && data.description2}</p>
      </div>
    </div>
  )
}

const ProductMidSection = () => {
  return (
    <div className='mid-section'>
      <div className='box'>
        <h6>Svojstva</h6>
      </div>
      <div className='box'>
        <h6>Dizajn</h6>
        <span>
          <a href='#' className='mail'>
            info@tehnoplast.co.rs
          </a>
        </span>
      </div>
      <div className='box'>
        <h6>Performans</h6>
        <span>
          <a href='#'>+ 38163601283, Ivank</a>
        </span>
        <span>
          <a href='#'>+ 38163601283, Stefan</a>
        </span>
        <span>
          <a href='#'>+ 38134852123, Tel/Fax</a>
        </span>
      </div>
    </div>
  )
}

const ProductBotSection = ({ cls }) => {
  return (
    <div className={cls}>
      <div className='profil-bot-img'>
        <Image src={thermo} alt={`Test Tehnoplast`} fill objectFit='cover' />
      </div>
      <div className='profil-info'>
        <h3>Energetski nivoi</h3>

        <p>
          Učinili smo ga neuporedivim po energetskim performansama,
          neprikosnovenim i nepropusnim. Napravili smo ga kompletnim i
          raznovrsnim tako da možete da ga učinite divnim.
        </p>
        <p>
          Performanse ICONIC V77 AI² na svim faktorima koji utiču na unutrašnje
          okruženje su izvanredne i sertifikovane od strane Instituta Ift
          Rosenheim u Nemačkoj.
        </p>
      </div>
    </div>
  )
}
