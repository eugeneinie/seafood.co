import React from 'react'
import Category from '../components/Category'
import ShopHeader from './ShopHeader'
import FeaturedItem from './FeaturedItem'
import OpenWeatherApi from '../components/OpenWeatherApi'

// type seafoodProps = {
//   products: {
//     name: string,
//     type: string,
//     description: string,
//     id: number,
//     price: number
//   }[]
// }

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <ShopHeader />
    <FeaturedItem />
    <div className='relative top-[40px] flex items-start mx-auto pt-[280px]'>
      <Category />
      {children}
    </div>
    <OpenWeatherApi />
    </>
  )
}