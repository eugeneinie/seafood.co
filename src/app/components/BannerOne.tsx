import styles from './components.module.css'
import Link from 'next/link'

export default function BannerOne() {
  return (
    <section className={styles.bannerOne}>
      <section className='text-[#fff] sm:w-[50%] w-4/5 sm:p-[5em] p-[3em]'>
        <h2 className='sm:text-l text-6xl font-sans font-semibold'>Serving you since 2021.</h2>
        <p className='sm:text-2xl text-xl font-sans'>We deliver the best seafood across West Africa. The best prices you can ever get!</p>
        {/* <Link href={`/`}></Link> */}
        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Shop now</button>
      </section>
    </section>
  )
}
