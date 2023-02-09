import React from 'react'
import MainLayout from './../../../layout/MainLayout'

import Product from '../../../components/Product'
import { useRouter } from 'next/router'

import { prozori } from './../../../data/prozori'

const ProductPage = () => {
  const router = useRouter()
  const { product } = router.query

  const data = prozori.filter((prozor) => prozor.tag === product)

  return (
    <MainLayout dark>
      <Product data={data} />
    </MainLayout>
  )
}

export default ProductPage
