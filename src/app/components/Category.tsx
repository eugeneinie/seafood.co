import React from 'react'
import cate from './components.module.css'
import Link from 'next/link'

export default function Category() {
  return (
    <aside className={cate.cat}>
      <ul>
        <Link href='/category/crayfish'>
          <li>Crayfish</li>
        </Link>

        <Link href='/category/scallops'>
          <li>Scallops</li>
        </Link>

        <Link href='/category/lobsters'>
          <li>Lobsters</li>
        </Link>

        <Link href='/category/fish'>
          <li>Fish</li>
        </Link>

        <Link href='/category/oysters'>
          <li>Oysters</li>
        </Link>

        <Link href='/category/prawns'>
          <li>Prawns</li>
        </Link>

        <Link href='/category/crabs'>
          <li>Crabs</li>
        </Link>

        <Link href='/category/squids'>
          <li>Squids</li>
        </Link>

        <Link href='/category/crawfish'>
          <li>Crawfish</li>
        </Link>

        <Link href='/category/snails'>
          <li>Snails</li>
        </Link>

        <Link href='/category/seafood_ink'>
            <li>Seafood_ink</li>
        </Link>        
      </ul>
    </aside>
  )
}
