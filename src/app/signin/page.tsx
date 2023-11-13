"use client"
import React, { useState } from 'react'

export default function page() {

    const [inputVal, setInputVal] = useState('')

    const handleChang = (evt:any) => {
      setInputVal(evt.target.value)
    } 

return (
    <div>
        <div className="relative top-20 bg-">
          <p className='text-3xl font-bold'>Sign In</p>
          <p>Name</p>
          <form>        
            <input type="text" value={inputVal} onChange={handleChang} placeholder='Enter your name' className='hover:border-[#3498db] w-[100%] h-[35px]'/>        
          </form>

          <p>Email Address</p>
          <form>
            <input type="email" value={inputVal} onChange={handleChang} placeholder='Enter your email address' className='hover:border-[#3498db] w-[100%] h-[35px]'/>
          </form>
          <button type="submit" className='font-bold bg-[#3498db] rounded-md px-7 py-2 my-4 hover:text-black'>Submit</button>
        </div>
    </div>
  )
}
