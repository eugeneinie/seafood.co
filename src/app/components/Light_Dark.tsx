// 'use client'
import React, { useState } from 'react';
import { BsSunFill, BsMoon } from 'react-icons/bs';

const LightDarkToggle = () => {
    // State to manage the theme (light or dark)
    const [theme, setTheme] = useState('light');

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        // Container for light and dark mode icons with click events
        <div>
            <BsSunFill onClick={toggleTheme} />
            <BsMoon onClick={toggleTheme} />
        </div>
    );
}

export default LightDarkToggle;


// 'use client'
// import React, { useState } from 'react'
// import { BsSunFill, BsMoon } from 'react-icons/bs'

// const LightDarkToggle = () => {
//     const [theme, setTheme] = useState('light')
    
//     const toggleTheme = (theme:any) => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
//     }
//     return (
//         <div>
//             <BsSunFill onClick={toggleTheme} />
//             <BsMoon onClick={toggleTheme} />
//         </div>
//     )
// }
// export default LightDarkToggle
