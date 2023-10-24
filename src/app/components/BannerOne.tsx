import styles from './components.module.css'

export default function BannerOne() {
  return (
    <section className={styles.bannerOne}>
      <section className='text-[#ffffff] w-[50%] p-[5em]'>
        <h2 className='text-[4em] font-sans'>Serving you since 1989.</h2>
        <p>We serve you the best seafood across tropical Africa and Eastern Asia. The best prices you can ever get</p>

        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Shop now</button>
      </section>
    </section>
  )
}
