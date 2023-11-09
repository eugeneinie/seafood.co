import {useState} from 'react'

export default function ContactForm() {
    const  [inputValue, setInputValue] = useState('')

    const handleChange = (evt) => {
      setInputValue(evt.target.value)
    } 
  return (
    <>
      <p className='text-2xl text-bold'>Contact Form</p>
      <p>Send us a message and we`&apos;`ll get back to you in no time!</p>
      <p>Name</p>
      <form>
        <label>Input Value
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter your name' className='border hover:border-red'/>
        </label>
      </form>
      <p>Email Address</p>
      <form>
        <label>Input Value
        <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your email addresss' className='border hover:border-red'/>
        </label>
      </form>
      <p>Your Message</p>
      <form>
        <label>Input Value
        <input type="email" value={inputValue} onChange={handleChange} placeholder='Enter your message' className='h-2 border hover:border-red'/>
        </label>
      </form>
      <button type="submit" className='text-bold px-2 py-1 hover:text-black'>Submit</button>tn
    </>
  )
}
