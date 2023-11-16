import React from 'react'
import Category from '../components/Category'
// import Details from '../components/Details'

export default function layout({
    children, 
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='relative top-[45px] flex w-4/5 mx-auto'>
      <Category/>
      {/* <Details /> */}
      {children}
    </div>
  )
}
// Explain this code snippet
