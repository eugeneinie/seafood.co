import { seafoods } from "../page"
import Link from "next/link"
import Image from "next/image"

export default function page() {
  return (
    <section className="w-[75%] m-auto py-8 flex flex-col gap-y-4">
      <aside className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
        {seafoods.map((seafood, index) => (
          <div key={index} className="text-center">
            <Link href={`/seafood/${seafood.name}`}>
              <Image src={`/images/${seafood.name}.jpg`} alt={seafood.name} width={400} height={600} className="h-[400px] rounded-md"/>
            </Link>
            <h2 className="capitalize">{seafood.name}</h2>
            <h2>&#8358;{seafood.price}</h2>
            <Link href='/'>
              <button className="bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white">Details</button>
            </Link>
          </div>
        ))}
      </aside>      
    </section>
  )
}
