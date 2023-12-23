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
// bg-[#3498db] sm:scale-y-150 md:h-[100vh]
  return (
    <nav className='bg-[#3498db] h-[230px] md:h-[90px] sm:h-[200px] flex sm:items-center items-start justify-around text-white'>

        <aside className='flex items-center gap-x-0'>            
            <Image src='/images/logo.png' alt='brand logo' width={101} height={70} className='relative left-2 p-0 m-0'/>            
            <Link href={`/`}>
            <h3 className='relative'>Seafood.co</h3>
            </Link>
        </aside>

        <ul className='relative flex sm:flex md:flex md:flex-row flex-col items-center justify-between capitalize gap-x-8'>
          <Link href='/' className='sm:hidden' onClick={toggleMobileMenu}>
            <li>
              <GiHamburgerMenu/>
            </li>
          </Link>
          
          { mobileMenuVisible &&
            <>
              <Link href='/' className='sm:hidden block'>
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

              <Link href='/cart' className='sm:block'>                
                <li>
                  <Carticon />
                </li>               
              </Link>
            </> }
        </ul>
    </nav>
  )
}
