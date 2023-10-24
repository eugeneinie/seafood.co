import React from 'react'
import Image from 'next/image'
import Carticon from './Carticon'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-[#3498db] h-[80px] flex items-center justify-around text-white'>
      
        <aside className='flex items-center gap-x-2'>
            <Image src='/images/dbiTlogo_sticker.png' alt='logo' width={80} height={80}/>
            <h3>Seafood.co</h3>
        </aside>

        <ul className='flex items-center justify-between capitalize gap-x-8'>
            <Link href=''>
              <li><button className='hover:bg-black hover:px-3  hover:py-1.5 rounded-md'>Home</button> </li>
            </Link>

            <Link href=''>
              <li><button className='hover:bg-black hover:px-3  hover:py-1.5 rounded-md'>About</button></li>
            </Link>

            <Link href=''>
              <li><button className='hover:bg-black hover:px-3  hover:py-1.5 rounded-md'>Shop</button></li>
            </Link>

            <Link href=''>
              <li><button className='hover:bg-black hover:px-3  hover:py-1.5 rounded-md'>Donate</button></li>
            </Link>

            <Link href=''>
              <li><button className='hover:bg-black hover:px-3  hover:py-1.5 rounded-md'>Contact</button></li>
            </Link>

            <Link href=''>
              <li>
                <Carticon/>
              </li>
            </Link>
        </ul>
    </nav>
  )
}
