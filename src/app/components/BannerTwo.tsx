import styles from './components.module.css'
import Link from 'next/link'

export default function BannerTwo() {
  return (
    <section className={styles.bannerTwo}>
      <section className='text-[#ccc] sm:w-[100%] w-4/5 sm:p-[5em] p-[3em] text-right'>
        <h2 className='sm:text-[4em] text-6xl font-sans'>How we're serving you online and offline</h2>
        <p className='sm:text-2xl text-xl font-sans'>As an online store, we've taken precautionary measures <br />
        to ensure the safety of all our customers and team members.</p>
        {/* <Link href={`/`}></Link> */}
        <button className='px-4 py-2 mt-4 rounded-md hover:bg-[#3498db] hover:text-white font-semibold bg-white text-black'>Read our whitepaper</button>
      </section>
    </section>
  )
}
