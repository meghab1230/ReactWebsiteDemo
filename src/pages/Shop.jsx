import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollections from '../components/newCollections/newCollections'
import NewsLetter from '../components/newsletter/newsletter'
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
   
    </div>
  )
}

export default Shop
