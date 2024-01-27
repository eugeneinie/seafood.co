import React from 'react';
import Link from 'next/link';
import styles from '../components/components.module.css';

// Component for the About section banner
export default function AboutBanner() {
  return (
    // Outer section with a specific style class
    <section className={styles.aboutBan}>
      
      {/* Inner section with text content */}
      <section className='text-[#fff] sm:w-[50%] sm:p-[5em]'>
        {/* Main heading for the banner */}
        <h2 className='sm:text-[4em] text-6xl font-sans font-semibold'>
          Your Adventure Awaits
        </h2>

        {/* Subtitle or paragraph describing the adventure offerings */}
        <p className='sm:text-2xl text-xl font-sans'>
          Acme Outdoors has everything you need to <br /> help you get started today.
          Check out our <br /> wonderful collection of gear that will make your next
          <br /> adventure complete.
        </p>

        {/* Link component (empty for now, needs a URL) */}
        <Link href={``}></Link>

        {/* Button for shopping seafood */}
        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>
          Shop Seafood
        </button>
      </section>
    </section>
  );
}


// import React from 'react'
// import Link from 'next/link'
// import styles from '../components/components.module.css'

// export default function AboutBanner() {
//   return (
//     <section className={styles.aboutBan}>
//       <section className='text-[#fff] sm:w-[50%] sm:p-[5em]'>
//         <h2 className='sm:text-[4em] text-6xl font-sans font-semibold'>Your Adventure Awaits</h2>
//         <p className='sm:text-2xl text-xl font-sans'>
//         Acme Outdoors has everything you need to <br /> help you get started today. Check out our <br /> wonderful collection of gear that will make your next <br /> adventure complete.
//         </p>
//         <Link href={``}></Link>
//         <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Shop Seafood</button>
//       </section>
//     </section>
//   )
// }
