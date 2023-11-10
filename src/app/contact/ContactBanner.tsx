import React from 'react'
import styles from '../components/components.module.css'

export default function ContactBanner() {
  return (
    <section className={styles.contactBanner}>
        <section className='text-[#fff] sm:w-[50%] sm:p-[5em]'>
        <h2 className='sm:text-[4em] text-6xl font-sans font-semibold'>Your Adventure Awaits</h2>
        <p className='sm:text-2xl text-xl font-sans'>
        Acme Outdoors has everything you need to <br /> help you get started today. Check out our <br /> wonderful collection of gear that will make your next <br /> adventure complete.
        </p>
        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Shop Seafood</button>
        </section> 
    </section>
  )
}
