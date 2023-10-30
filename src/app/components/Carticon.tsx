import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

export default function Carticon() {
  return (
    <div className='bg-black px-4 py-2 rounded-md'>
        {/* <Link href='/'> */}
        <FaShoppingCart/>      
        {/* </Link> */}
    </div>
  )
}
