// Importing necessary modules and components from Next.js and React
import { seafoods } from "../page"
import Link from "next/link"
import Image from "next/image"

// Functional component named 'page' representing a specific page in the React app
export default function page() {
  return (
    /* Section for displaying a grid of seafood items */
    <section className="w-[64%] relative m-0 px-0 left-[184px] bottom-5 py-8 flex flex-col gap-y-4">
      {/* Grid layout for displaying seafood items */}
      <aside className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
        {/* Mapping through the 'seafoods' array to display each seafood item */}
        {seafoods.map((seafood, index) => ( 
          /* Individual card for each seafood item */
          <div key={index} className="text-center">
            {/* Link to the details page for the specific seafood item */}
            <Link href={`/seafood/${seafood.name}`}>
              {/* Image of the seafood item */}
              <Image src={`/images/${seafood.name}.jpg`} alt={seafood.name} width={400} height={600} className="h-[400px] rounded-md"/>
            </Link>
            {/* Name of the seafood item */}
            <h2 className="capitalize">{seafood.name}</h2>
            {/* Price of the seafood item */}
            <h2>&#8358;{seafood.price}</h2>
            {/* Button to navigate to the details page */}
            <Link href='/details'>
              <button className="bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white">Details</button>
            </Link>
          </div>
        ))}
      </aside>      
    </section>
  )       
}

// This React component represents a specific page in the app that displays a grid of seafood items. Each item is presented in a card format with its image, name, price, and a button to navigate to the details page. The seafoods array is mapped through to render each seafood item.


// import { seafoods } from "../page"
// import Link from "next/link"
// import Image from "next/image"

// export default function page() {
//   return (
//     <section className="w-[64%] relative m-0 px-0 left-[184px] bottom-5 py-8 flex flex-col gap-y-4">
//       <aside className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
//         {seafoods.map((seafood, index) => (
//           <div key={index} className="text-center">
//             <Link href={`/seafood/${seafood.name}`}>
//               <Image src={`/images/${seafood.name}.jpg`} alt={seafood.name} width={400} height={600} className="h-[400px] rounded-md"/>
//             </Link>
//             <h2 className="capitalize">{seafood.name}</h2>
//             <h2>&#8358;{seafood.price}</h2>
//             <Link href='/details'>
//               <button className="bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white">Details</button>
//             </Link>
//           </div>
//         ))}
//       </aside>      
//     </section>
//   )       
// }
