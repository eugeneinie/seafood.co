import React from 'react'
import Image from 'next/image'
import styles from '../components/components.module.css'


const benefits = [
    {
        id: 1,
        title: "Lifetime Warranty",
        image: "/images/verified.svg" ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 2,
        title: "Shopping Experience",
        image: "/images/cart.svg" ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 3,
        title: "On-time Delivery",
        image: "/images/delivery.svg" ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 4,
        title: "Best in Class Service",
        image: "/images/chat.svg" ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    }
]

const benefitsGrid = benefits.map((grid) => (
  <aside key={grid.id}>
    <Image
      src={grid.image}
      alt={grid.title}
      width={40}
      height={40}
    />
    <h3>{grid.title}</h3>
    <p>{grid.statement}</p>
  </aside>
))

export default function Benefits() {
  return (
    <>
      <section className={`relative left-[10px] my-8 ${styles.choose} text-center`}> 
          <p className='py-4'>WHY CHOOSE SEAFOOD.CO?</p>
          <h2>We’re the best in the business.</h2>
          <p>From more than 30 years, we’ve been leading the way across Africa — <br />creating the best possible customer experience since 1989.</p>
      </section>
      <section className={`w-[80%] m-auto ${styles.benefits}`}>      
      
      <section className='flex flex-row sm:grid-cols-3 gap-[10px]'>
        {benefitsGrid}
      </section>
    </section>
    </>
  )
}