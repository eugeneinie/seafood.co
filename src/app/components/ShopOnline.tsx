import Image from "next/image"

export default function ShopOnline() {
  return (
    <>
    <div className="flex flex-row m-auto relative w-[100%]">
      <div className='relative left-[500px] h-[1000px] w-[50%] rounded-md bg-slate-900 py-[80px]'>
        <aside className="relative text-white p-0 m-0 left-44 w-[60%]">
          <h2 className='font-bold text-3xl text-left'>Shop Online</h2><br />
          <p>We know that after COVID-19, a lot of folks around the city and state are feeling uneasy about the future - you’re not alone.</p>  <br />

          <p>We are committed to making sure you enjoy gastronomic seafood experiences, and we’re going to keep doing just that - with our dedicated team.</p><br />

          <p>As long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p><br />

          <p>-------</p><br />

          <p>Esther & Ini-ubong Isemin</p><br />

          <p>Seafood.co</p><br /><br />
        </aside>
        
      </div>
      <div className="relative right-[650px] top-24 p-0 m-0">
          <Image
              src={`/images/founders.png`}
              alt='buy seafood online'
              width={500}
              height={660}
              className='rounded-md relative h-[800px] p-0 m-0 w-[500px]'
          />
      </div>
    </div>
    </>
  )
}
