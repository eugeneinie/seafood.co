import Image from "next/image"

export default function ShopOnline() {
  return (
    <>
    <div className="flex flex-row m-auto relative left-[100px]">
      <div className='relative left-18 h-[1000px] w-[2000px] right-2 my-40 rounded-md bg-slate-900 text-left ml-[300px] pl-[200px] py-[80px] pr-[50px]'>

        <h2 className='font-bold text-3xl'>Shop Online</h2><br />

        <p>We know that after COVID-19, a lot of folks around the city and state are feeling uneasy about the future - you’re not alone.</p>  <br />

        <p>We are committed to making sure you enjoy gastronomic seafood experiences, and we’re going to keep doing just that - with our dedicated team.</p><br />

        <p>As long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p><br />

        <p>-------</p><br />

        <p>Jane & John Doe</p><br />

        <p>Seafood.co</p><br /><br />
      </div>
      <div className="relative right-[900px] top-[50px] my-40">
          <Image
              src={`/images/houcine.jpg`}
              alt='buy seafood online'
              width={40}
              height={80}
              className='rounded-md relative h-[900px] w-[2000px]'
          />
      </div>
    </div>
    </>
  )
}
