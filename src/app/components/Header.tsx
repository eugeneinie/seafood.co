import Navbar from "./Navbar";
import { BsSunFill, BsMoon } from 'react-icons/bs'
import LightDarkToggle from "./Light_Dark";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center gap-x-3 space-x-2 bg-black h-[80px] text-white">
        <div>
        <BsSunFill /> <BsMoon /> 
        {/* <LightDarkToggle/>  */}
        </div>
        
        <button className="bg-[#e55] rounded-2xl py-1 px-4">Announcement</button>
        <p>How we&apos;re responding to COVID-19</p>
      </div>
        <Navbar />        
               
    </header>
  )
}
