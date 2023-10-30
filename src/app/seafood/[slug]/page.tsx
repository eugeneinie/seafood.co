import { seafood } from "@/app/page"

export default function Page({params}) {
  const seafoodIndex = seafood.find(seafood => seafood.name === params.slug)
  return (
    <div className="min-h-screen">
      <h2 className="h-[200px] text-white bg-slate-950 text-4xl px-7 py-9">{seafoodIndex.name}</h2>
      <p>{seafoodIndex.price}</p>
      <section>
        {seafoodIndex.description.map((desc, index) =>(
          <p key={index}>{desc}</p>
        ))}
      </section>      
    </div>
  )
}
