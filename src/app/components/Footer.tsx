import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub }  from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

export default function Footer() {
  return (
      <footer className='h-[200px] bg-black text-white flex flex-col justify-center -bottom-80'>
        <div className='flex justify-around items-center'>
                <div className='flex items-center space-x-4'>
                    <Image src='/images/designbyinie.png' alt='logo' width={50} height={50}/>
                    <p>dbiTech</p>
                </div>

                <div className='flex space-x-3 text-3xl'>
                    <Link href=''>
                        <AiFillGithub />
                    </Link>

                    <Link href=''>
                        <BsLinkedin />
                    </Link>
                    
                    <Link href=''>
                        <RiTwitterXFill />
                    </Link>
                </div>
        </div>
        <div className=" text-center ">

        <p>
            Designed by <Link href=''>dbiTech</Link> &copy; {new Date().getFullYear()}
        </p>
        </div>
       

    </footer>
  )
}
