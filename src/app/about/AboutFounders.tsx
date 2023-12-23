import React from 'react'
import Image from 'next/image'

export default function AboutFounders() {
  return (
    <>
      <div className="flex flex-row mx-auto my-20 relative w-[100%]">
        <div className='relative left-[500px] h-[900px] w-[50%] rounded-md bg-slate-900 py-[80px]'>
        <aside className="relative text-white p-0 m-0 left-44 w-[60%]">
          <h2 className='font-bold text-3xl text-left'>Meet our founders</h2>
          <p><br />
          John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal. <br />
          <br />
          While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors. <br /><br />
          Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions. <br />
          <br />
          While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow! <br />
          <br />
          In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state. <br /><br />
          To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.
          </p>
          </aside>
        </div>
        <div className="relative right-[650px] top-24 p-0 m-0">
            <Image
                src={`/images/founders.png`}
                alt='founders'
                width={500}
                height={660}
                className='rounded-md relative p-0 m-0 '
            />
        </div>
      </div>
    </>
  )
}
