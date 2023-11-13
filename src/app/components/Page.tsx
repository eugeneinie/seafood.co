'use client'
import React, { useState } from 'react'
import Data from './Data'

// setNumber is a function, 100 is the initial value!
export default function Page() {
    const [number, setNumber] = useState(100)

function increase(){
    // setNumber(prevState => prevState + 5)
    setNumber(number + 10) 
}

function decrease(){
    setNumber(number - 5)
}

  return (
    <div className='m-auto w-1/2 mt-[100] p-[50px]'>
      <p>
        {number}
      </p>
      <div className="gap-2 flex flex-row">
        <button className='p-4 bg-green-700 text-white rounded-md' onClick={increase}>Increase</button>
        <button className='p-4 bg-red-700 text-white rounded-md' onClick={decrease}>Decrease</button>
      </div>
      <Data/>

    </div>
  )
}