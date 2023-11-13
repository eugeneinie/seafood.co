"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Carticon from './Carticon'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './components.module.css'

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  }
// bg-[#3498db]
  return (
    <nav className='bg-[#3498db] sm:h-[100px] h-[230px] flex sm:items-center items-start justify-around text-white'>

        <aside className='flex items-center gap-x-0'>            
            <Image src='/images/dbiTlogo_sticker.png' alt='brand logo' width={80} height={80}/>            
            <Link href={`/`}>
            <h3 className='relative right-[20px]'>Seafood.co</h3>
            </Link>
        </aside>

        <ul className='flex sm:flex md:flex md:flex-row sm:flex-row flex-col items-center justify-between capitalize gap-x-8'>
          <Link href='/' className='sm:hidden block' onClick={toggleMobileMenu}>
            <li>
              <GiHamburgerMenu/>
            </li>
          </Link>
          
          { mobileMenuVisible &&
            <>
              <Link href='/' className='sm:block'>
                <li>Home </li>               
              </Link> 
                  
              <Link href='/about' className='sm:block'>                
                <li>About</li>
              </Link>

              <Link href='/shop' className='sm:block'>                
                <li>Shop</li>
              </Link>            

              <Link href='/signin' className='sm:block'>                
                <li>Sign-in</li>           
              </Link>

              <Link href='/contact' className='sm:block'>                
                <li>Contact</li>          
              </Link>
            </> }

          <Link href='/cart'>                
            <li>
              <Carticon />
            </li>               
          </Link>

        </ul>
    </nav>
  )
}
