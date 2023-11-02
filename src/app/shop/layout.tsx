import React from 'react'
import Category from '../components/Category'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className='relative top-[40px] flex items-start mx-auto'>
      <Category/>
      {children}
    </div>
    </>
  )
}