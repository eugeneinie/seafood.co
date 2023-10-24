import React, { useState } from 'react'
import { BsSunFill, BsMoon } from 'react-icons/bs'

const LightDarkToggle = () => {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <div>
            <BsSunFill onClick={toggleTheme} />
            <BsMoon onClick={toggleTheme} />
        </div>
    )
}
export default LightDarkToggle
