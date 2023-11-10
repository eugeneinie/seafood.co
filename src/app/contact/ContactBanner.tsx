import React from 'react'
import styles from '../components/components.module.css'
import Image from 'next/image'

// const foundersProfile = [
//   {
//     id: 1,
//     name: 'Contact Us',
//     title: '/images/chat.png',
//     statement: 'Just want to say hi? We&apos;d love to hear from you. We love our customers and community!',
//     btn:<button key={1} className='py-2 px-4 bg-slate-950 rounded-md text-white m-auto'>Send Us A Message</button>
//   },
//   {
//     id: 2,
//     title: 'Get Support',
//     image: '/images/chatwarning.png',
//     statement: 'Have an issue with an order or with a product you purchased from us? Fill out our support form.',
//     btn:<button key={2} className='py-2 px-4 bg-slate-950 rounded-md text-white m-auto'>Contact Support</button>
//   }
//   ]

  // const contactGrid = foundersProfile.map((grid) => (
  //   <aside key={grid.id}>
  //     <Image
  //       src={grid.image}
  //       alt={grid.title}
  //       width={40}
  //       height={40}
  //     />
  //     <h3>{grid.title}</h3>
  //     <p>{grid.statement}</p>
  //     <div>{grid.btn}</div>
  //   </aside>
  // ))

export default function ContactBanner() {
  return (
    <>
      <section className={styles.contactBanner}>
          <section className='relative top-10 text-[#fff] sm:w-[100%] sm:px-[2em] px-[2em]'>
            <h2 className='sm:text-4xl text-xl font-sans font-bold'>We&apos;d love to hear from you</h2>
          </section> 
        <div className="flex flex-row relative gap-1">
          <div className="relative bg-white rounded-md h-[400px] w-[330px] top-[70px] left-5 ">
            <aside className='text-center text-black relative my-1'>
              <h2 className='font-bold text-2xl'>Contact Us</h2>
              <p>Just want to say hi? We'd love <br /> to hear from you. We love our <br /> customers and community!</p>
            </aside>
            <button className='px-4 py-2 relative left-[100px] top-[300px] rounded-md bg-[#3498db] hover:bg-slate-950 hover:text-[#3498db] border-2 border-white border-solid font-semibold'>Shop Seafood</button>
          </div>
        </div>
          {/* <section className='flex flex-row sm:grid-cols-3 gap-[10px] bg-white rounded-md h-[400px] w-[330px] top-[100px] left-5 '>
            {contactGrid}
          </section> */}
      </section>
    </>
  )
}
