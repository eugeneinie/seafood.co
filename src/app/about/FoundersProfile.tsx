import React from 'react'
import Image from 'next/image'

export default function FoundersProfile() {
  return (
    <>
    <div className="flex flex-row gap-24">
    <div className='relative left-18 h-[1000px] w-[2000px] right-2 my-40 rounded-md text-left ml-[300px] pl-[200px] py-[80px] pr-[50px]'>
          <h2 className='font-bold text-3xl'>Meet our founders</h2>
        <p><br />
        John met on a backpacking adve nture in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal. <br />
        </p>
      </div>
      <div className="relative right-[800px] top-[50px] my-40">
          <Image
              src={`/images/founders.jpg`}
              alt='founders'
              width={40}
              height={40}
              className='rounded-full relative h-[120px] w-[450px]'
          />
      </div>
    </div>
    </>
  )
}
