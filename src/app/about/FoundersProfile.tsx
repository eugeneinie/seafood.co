import React from 'react'
import Image from 'next/image'

export default function FoundersProfile() {
  return (
    <>
    <div className="flex flex-row gap-24">
      <div className="m-auto">
        <div className="relative right-[55%] top-[100px] my-40">
            <Image
                src={`/images/founders.jpg`}
                alt='founders'
                width={40}
                height={80}
                className='rounded-full relative h-[200px] w-[200px]'
                />
        </div>
        <div className='relative text-center rounded-md m-auto p-[300px] py-[100px] pr-4'>
            <h2 className='font-bold text-3xl'>Meet our founders</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros elementum <br />tristique. Duis cursus, mi quis viverra ornare, eros <br />dolor interdum nulla, ut commodo diam libero vitae <br />erat. Aenean faucibus nibh et justo cursus id rutrum <br />lorem imperdiet. Nunc ut sem vitae risus tristique <br /> posuere.          
          </p>
        </div>
      </div>
      <div className="m-auto">
        <div className='relative left-18 h-[800px] w-[800px] right-2 my-40 rounded-md text-left ml-[400px] pl-[300px] py-[100px] pr-4'>
            <h2 className='font-bold text-3xl'>Meet our founders</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros elementum <br />tristique. Duis cursus, mi quis viverra ornare, eros <br />dolor interdum nulla, ut commodo diam libero vitae <br />erat. Aenean faucibus nibh et justo cursus id rutrum <br />lorem imperdiet. Nunc ut sem vitae risus tristique <br /> posuere. 
          </p>
        </div>
        <div className="relative right-[55%] top-[100px] my-40">
            <Image
                src={`/images/founders.jpg`}
                alt='founders'
                width={40}
                height={80}
                className='rounded-md relative h-[600px] w-[600px]'
                />
        </div>
      </div>
    </div>
    </>
  )
}
