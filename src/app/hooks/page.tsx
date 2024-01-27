// Importing necessary modules and components from React
'use client'
import React, { useState } from 'react'
import Data from './Data'

// Functional component named 'Page' representing a page or section in the React app
export default function Page() {
    // State to manage a numerical value, initialized to 100
    const [number, setNumber] = useState(100)

    // Function to increase the numerical value
    function increase() {
        // Uncomment the line below to use the functional update form
        // setNumber(prevState => prevState + 5)
        setNumber(number + 10) 
    }

    // Function to decrease the numerical value
    function decrease() {
        setNumber(number - 5)
    }

    return (
        <div className='m-auto w-1/2 mt-[100] p-[50px]'>
            {/* Displaying the current numerical value */}
            <p>
                {number}
            </p>

            {/* Buttons for increasing and decreasing the numerical value */}
            <div className="gap-2 flex flex-row">
                <button className='p-4 bg-green-700 text-white rounded-md' onClick={increase}>Increase</button>
                <button className='p-4 bg-red-700 text-white rounded-md' onClick={decrease}>Decrease</button>
            </div>

            {/* Rendering the Data component */}
            <Data/>
        </div>
    )
}


// This React component represents a page or section in the app that includes a numerical value displayed along with buttons to increase and decrease it. The component also renders another component (Data). The numerical value is managed using the useState hook, and the increase and decrease functions modify this state accordingly.


// 'use client'
// import React, { useState } from 'react'
// import Data from './Data'

// // setNumber is a function, 100 is the initial value!
// export default function Page() {
//     const [number, setNumber] = useState(100)

// function increase(){
//     // setNumber(prevState => prevState + 5)
//     setNumber(number + 10) 
// }

// function decrease(){
//     setNumber(number - 5)
// }

//   return (
//     <div className='m-auto w-1/2 mt-[100] p-[50px]'>
//       <p>
//         {number}
//       </p>
//       <div className="gap-2 flex flex-row">
//         <button className='p-4 bg-green-700 text-white rounded-md' onClick={increase}>Increase</button>
//         <button className='p-4 bg-red-700 text-white rounded-md' onClick={decrease}>Decrease</button>
//       </div>
//       <Data/>

//     </div>
//   )
// }
