"use client"
import { useState } from 'react'
import styles from '../components/components.module.css'

export default function ContactForm() {
    const  [inputValue, setInputValue] = useState('')

    const handleChange = (evt:any) => {
      setInputValue(evt.target.value)
    } 
  ;return (
    <>
      <div className={`${styles.formStyle} relative bottom-20 pl-40 flex flex-row gap-24 text-white`}>
        <div className="relative left-4 top-44 bg-slate-950 rounded-md p-4 h-64">
          <p className='text-3xl font-bold'>For Enquiries</p>
          <p>General Enquiries: (+234)8179518958</p>
          <p>Customer Support: (+234)8101859094</p>
          <address> 
            <p>
              No.38 Moleye street,<br />
              Alagomeji, Yaba,<br />
              Lagos state.
            </p> 
          </address>
        </div>
        <div className="relative top-20 bg-slate-950 rounded-md p-4">
          <p className='text-3xl font-bold'>Contact Form</p>
          <p>Send us a message and we&apos;ll get back to you in no time!</p>
          <p>Name</p>
          <form>        
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter your name' className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'/>        
          </form>
          <p>Email Address</p>
          <form>
            <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your email address' className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'/>
          </form>
          <p>Your Message</p>
          <form>
            <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your message' className='h-[60px] hover:border-[#3498db] align-text-top w-[100%] rounded-sm'/>
          </form>
          <button type="submit" className='font-bold bg-[#3498db] rounded-md px-7 text-black py-2 my-4 hover:text-white hover:bg-slate-950 hover:border-[2px] hover:border-white'>Submit</button>
        </div>
      </div>
    </>
  )
}
