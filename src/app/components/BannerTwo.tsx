import styles from './components.module.css'

export default function BannerTwo() {
  return (
    <section className={styles.bannerTwo}>
      <section className='text-[#ffffff] sm:w-[100%] w-4/5 sm:p-[5em] p-[3em] text-right'>
        <h2 className='text-[4em] font-sans'>How we're keeping your safe during COVID-19</h2>
        <p>As an outdoor shop, we've taken precautionary measures to ensure the safety of all our customers and team members.</p>

        <button className='px-4 py-2 mt-4 rounded-md hover:bg-[#3498db] hover:text-white font-semibold bg-white text-black'>Read our statement</button>
      </section>
    </section>
  )
}
