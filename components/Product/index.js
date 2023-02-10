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
    </div>
  )
}

export default Product

const ProductTopSection = ({ data }) => {
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

const ProductMidSection = ({ data }) => {
  return (
    <div className='mid-section'>
      <div className='box'>
        <h6>{data && data.properties.title}</h6>
        <ul>
          <li>
            {data && data.properties.prop1Title}{' '}
            <span>{data && data.properties.prop1}</span>
          </li>

          <li>
            {data && data.properties.prop2Title}{' '}
            <span>{data && data.properties.prop2}</span>
          </li>

          <li>
            {data && data.properties.prop3Title}{' '}
            <span>{data && data.properties.prop3}</span>
          </li>

          <li>
            {data && data.properties.prop4Title}{' '}
            <span>{data && data.properties.prop4}</span>
          </li>
        </ul>
      </div>
      <div className='box'>
        <h6>{data && data.design.title}</h6>
        <ul>
          <li>
            {data && data.design.prop1Title}{' '}
            <span>{data && data.design.prop1}</span>
          </li>

          <li>
            {data && data.design.prop2Title}{' '}
            <span>{data && data.design.prop2}</span>
          </li>

          <li>
            {data && data.design.prop3Title}{' '}
            <span>{data && data.design.prop3}</span>
          </li>

          <li>
            {data && data.design.prop4Title}{' '}
            <span>{data && data.design.prop4}</span>
          </li>
        </ul>
      </div>
      <div className='box'>
        <h6>{data && data.performans.title}</h6>
        <ul>
          <li>
            {data && data.performans.prop1Title}{' '}
            <span>{data && data.performans.prop1}</span>
          </li>

          <li>
            {data && data.performans.prop2Title}{' '}
            <span>{data && data.performans.prop2}</span>
          </li>

          <li>
            {data && data.performans.prop3Title}{' '}
            <span>{data && data.performans.prop3}</span>
          </li>

          <li>
            {data && data.performans.prop4Title}{' '}
            <span>{data && data.performans.prop4}</span>
          </li>

          <li>
            {data && data.performans.prop5Title}{' '}
            <span>{data && data.performans.prop5}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

const ProductBotSection = ({ cls, data }) => {
  return (
    <>
      <div className={cls}>
        <div className='profil-bot-img'>
          <Image
            src={data && data.thermo}
            alt={data && data.subtitle1}
            fill
            objectFit='cover'
          />
        </div>
        <div className='profil-info'>
          <h3>{data && data.subtitle1}</h3>

          <p>{data && data.subtitle1Desc1}</p>
          <p>{data && data.subtitle1Desc2}</p>
        </div>
      </div>

      <div className={`${cls} reverse`}>
        <div className='profil-bot-img'>
          <Image
            src={data && data.duration}
            alt={data && data.subtitle2}
            fill
            objectFit='cover'
          />
        </div>
        <div className='profil-info'>
          <h3>{data && data.subtitle2}</h3>

          <p>{data && data.subtitle2Desc1}</p>
          <p>{data && data.subtitle2Desc2}</p>
        </div>
      </div>
    </>
  )
}
