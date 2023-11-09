"use client"
import {useState} from 'react'
import styles from '../components/components.module.css'

export default function ContactForm() {
    const  [inputValue, setInputValue] = useState('')

    const handleChange = (evt) => {
      setInputValue(evt.target.value)
    } 
  return (
    <>
      <div className={`pt-[10px] ${styles.formStyle}`}>
        <p className='text-3xl font-bold'>Contact Form</p>
        <p>Send us a message and we&apos;ll get back to you in no time!</p>
        <p>Name</p>
        <form>        
          <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter your name' className='hover:border-[#3498db] w-[100%] h-[35px]'/>        
        </form>

        <p>Email Address</p>
        <form>
          <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your email address' className='hover:border-[#3498db] w-[100%] h-[35px]'/>
        </form>

        <p>Your Message</p>
        <form>
          <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your message' className='h-[60px] hover:border-[#3498db] align-text-top w-[100%]'/>
        </form>
        <button type="submit" className='font-bold bg-[#3498db] rounded-md px-6 py-1 my-4 hover:text-black'>Submit</button>
      </div>
    </>
  )
}
