import Image from "next/image"
import styles from './components.module.css'

const support = [
  {
    id: 1,
    title: 'support shop',
    image: '/images/designbyinie.png',
    statement: 'Our full product line is still available online here on our site! Ordering seafood is still something you can do. Get your seafood now!'
  },
  {
    id: 2,
    title: 'sign up',
    image: '/images/designbyinie.png',
    statement: 'Since we`&apos;`ve changed the way we operate to online only, signup to stay updated on our latest products and discounts.'
  },
  {
    id: 3,
    title: 'gift card',
    image: '/images/designbyinie.png',
    statement: 'Not craving seafood for now? No problem Buy a gift card and use it later or share it with friends and family.'
  }
]

const supportGrid = support.map((grid) => (
  <aside key={grid.id}>
    <Image src={grid.image} alt={grid.title} width={300} height={370}/>
    <h3>{grid.title}</h3>
    <p>{grid.statement}</p>
  </aside>
))

export default function Support() {
  return (
    <section className={`w-[80%] m-auto ${styles.support}`}>
      <h2 className="px-[2em] py-3 border-l-8 border-solid border-l-[#3498db] my-6">Support</h2>

      <section className="grid sm:grid-cols-3 grid-cols-1 gap-[50px]">
        {supportGrid}
      </section>
    </section>
  )
}
