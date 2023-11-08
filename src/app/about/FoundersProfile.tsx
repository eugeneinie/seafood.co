import React from 'react'
import Image from 'next/image'

const foundersProfile = [
{
  id: 1,
  name: 'Esther Isemin',
  image: '/images/founders.jpg',
  statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
},
{
  id: 2,
  name: 'Ini-ubong Isemin',
  image: '/images/founders.jpg',
  statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
}
]

const foundersGrid = foundersProfile.map((grid) => (
  <aside key={grid.id} className='mb-10'>
    <Image
      src={grid.image}
      alt={grid.name}
      width={50}
      height={50}
      className='m-auto relative rounded-full h-[200px] w-[200px] bottom-[50px]'
    />
    <div className="px-[15%]">
      <h3 className='font-bold text-center text-2xl'>{grid.name}</h3>
      <p className='text-center text-sm'>{grid.statement}</p>
    </div>
  </aside>
))

export default function FoundersProfile() {
  return (
    <>
      <section className={`flex flex-row sm: grid-cols-3 gap-[10px]`}>
        {foundersGrid}
      </section>    
    </>
  )
}
