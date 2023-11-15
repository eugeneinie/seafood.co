import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub }  from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

//#3498db 
export default function Footer() {
  return (
      <footer className='h-[150px] bg-[#3498db] text-white flex flex-col justify-center mt-[200px]'>
        <div className='flex justify-around items-center'>
                <div className='flex items-center space-x-4'>
                    <Image src='/images/designbyinie.png' alt='logo' width={50} height={50}/>
                    <p>dbiTech</p>
                </div>

                <div className='flex space-x-3 text-3xl'>

                    <Link href='https://linkedin.com/in/iniubongisemin'>
                        <BsLinkedin />
                    </Link>

                    <Link href='https://github.com/eugeneinie'>
                        <AiFillGithub />
                    </Link>
                    
                    <Link href='https://twitter.com/iniubongisemin'>
                        <RiTwitterXFill />
                    </Link>
                </div>
        </div>
        <div className="text-center">

        <p>
            Designed by <Link href='https://designbyinie.my.canva.site/' className='text-slate-900 hover:underline'>dbiTech</Link> &copy; {new Date().getFullYear()}
        </p>
        </div>
       

    </footer>
  )
}
