import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="my-[100px] w-[80%] m-auto flex sm:flex-row flex-col">
      <Image src='/images/houcine.jpg' alt="about image" width={400} height={500} className="sm:absolute sm:mt-[100px] h-[400px] sm:rounded-md"/>
      <section className="text-white bg-slate-950 sm:relative w-4/5 sm:-z-[1] sm:left-[300px] sm:rounded-md">
        <div className="flex flex-col gap-y-6 sm:w-1/2 sm:ml-[250px] px-9 py-5">          
          <h2>Shop Online</h2>
          <p>We know that after COVID-19, a lot of folks around the city and state are feeling uneasy about the future - you’re not alone.</p>  

          <p>We are committed to making sure you enjoy gastronomic seafood experiences, and we’re going to keep doing just that - with our dedicated team.</p>  

          <p>As long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>  

          <p>-------</p>  

          <p>Jane & John Doe</p>
          <p>Seafood.co</p>      
        </div>
      </section>
    </section>
  )
}