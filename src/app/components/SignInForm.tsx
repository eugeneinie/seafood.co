import React, { useState } from 'react'
import Link from 'next/link'

export default function SignInForm() {

  const [inputVal, setInputVal] = useState('')
  const [inputValue, setInputValue] = useState('')
  
    const handleChang = (evt:any) => {
      setInputVal(evt.target.value)
    }    
    const handleChange = (evt:any) => {
      setInputValue(evt.target.value)
    } 

return (
    <div>
        <div className="relative top-20 mx-auto mb-[291px] bg-slate-950 w-[50%] p-5 rounded-md">
          <p className='text-3xl font-bold'>Sign In</p>
          <p>Name</p>
          <form>        
            <input type="text" value={inputVal} onChange={handleChang} placeholder='Enter your name' className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'/>        
          </form>

          <p>Email Address</p>
          <form>
            <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your email address' className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'/>
          </form>

<Link href={`/`}>
  <button type="submit" className='font-bold bg-[#3498db] rounded-md px-7 py-2 my-4 hover:text-white '>Submit</button>
</Link>
        </div>
    </div>
  )
}
