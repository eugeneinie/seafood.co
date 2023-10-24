import React from 'react'
import BannerOne from './components/BannerOne'
import BannerTwo from './components/BannerTwo'
import Support from './components/Support'
import Products from './components/Products'
import Shop from './components/Shop'

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <BannerOne/>
        <Support/>
        <BannerTwo/>
        <Products/>
        <Shop/>
      </main>
    </>
  )
}
