import React from 'react'
import Image from 'next/image'
import styles from '../components/components.module.css'

const foundersProfile = [
{
  id: 1,
  name: 'Esther Isemin',
  image: '/images/founders.jpg',
  statement: 'Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Suspendisse varius enim in eros<br /> elementum tristique. Duis cursus, mi quis viverra<br /> ornare, eros dolor interdum nulla, ut commodo<br /> diam libero vitae erat. Aenean faucibus nibh et<br /> justo cursus id rutrum lorem imperdiet. Nunc ut<br /> sem vitae risus tristique posuere. <br />'
},
{
  id: 2,
  name: 'Ini-ubong Isemin',
  image: '/images/founders.jpg',
  statement: 'Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Suspendisse varius enim in eros<br /> elementum tristique. Duis cursus, mi quis viverra<br /> ornare, eros dolor interdum nulla, ut commodo<br /> diam libero vitae erat. Aenean faucibus nibh et<br /> justo cursus id rutrum lorem imperdiet. Nunc ut<br /> sem vitae risus tristique posuere. <br />'
}
]

const foundersGrid = foundersProfile.map((grid) => (
  <aside key={grid.id}>
    <Image
      src={grid.image}
      alt={grid.name}
      width={30}
      height={30}
    />
    <h3>{grid.name}</h3>
    <p>{grid.statement}</p>
  </aside>
))

export default function FoundersProfile() {
  return (
    <>
      <section className='flex flex-row sm: grid-cols-3 gap-[10px]'>
        {foundersGrid}
      </section>    
    </>
  )
}
