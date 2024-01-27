// Importing necessary modules and components from React
import React from 'react'
import Category from '../components/Category'
import ShopHeader from './ShopHeader'
import FeaturedItem from './FeaturedItem'
import OpenWeatherApi from '../components/OpenWeatherApi'

// Type definition for seafood properties
// type seafoodProps = {
//   products: {
//     name: string,
//     type: string,
//     description: string,
//     id: number,
//     price: number
//   }[]
// }

// Functional component named 'layout' defining the overall layout structure
export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Shop header component */}
      <ShopHeader />
      
      {/* Featured item component */}
      <FeaturedItem />

      {/* Main content section with category and children components */}
      <div className='relative top-[40px] flex items-start mx-auto pt-[280px]'>
        {/* Category component for displaying product categories */}
        <Category />
        {/* Children components or page content */}
        {children}
      </div>

      {/* OpenWeatherApi component for displaying weather information */}
      <OpenWeatherApi />
    </>
  )
}

// This React component defines the overall layout structure for the app, including the shop header, a featured item, a category section, and the main content or children components. The ShopHeader, FeaturedItem, Category, and OpenWeatherApi components are imported and used to build the layout. The children prop represents the content specific to each page or component wrapped by this layout.


// import React from 'react'
// import Category from '../components/Category'
// import ShopHeader from './ShopHeader'
// import FeaturedItem from './FeaturedItem'
// import OpenWeatherApi from '../components/OpenWeatherApi'

// // type seafoodProps = {
// //   products: {
// //     name: string,
// //     type: string,
// //     description: string,
// //     id: number,
// //     price: number
// //   }[]
// // }

// export default function layout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//     <ShopHeader />
//     <FeaturedItem />
//     <div className='relative top-[40px] flex items-start mx-auto pt-[280px]'>
//       <Category />
//       {children}
//     </div>
//     <OpenWeatherApi />
//     </>
//   )
// }

