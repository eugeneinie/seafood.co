import Navbar from "./Navbar";
import { BsSunFill, BsMoon } from 'react-icons/bs'
import LightDarkToggle from "./Light_Dark";

export default function Header() {
  return (
    <header className="fixed z-10 inset-x-0">
      <div className="flex items-center justify-center gap-x-3 bg-black h-[80px] text-white"> 
      {/* space-x-2  */}
        <div>
        <BsSunFill /> <BsMoon /> 
        {/* <LightDarkToggle/>  */}
        </div>        
        <button className="bg-[#3498db] rounded-2xl py-1 px-4">Announcement</button>
        <p>How we&apos;re responding to COVID-19</p>
      </div>
        <Navbar />                  
    </header>
  )
}
