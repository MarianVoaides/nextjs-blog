import Link from 'next/link'
import React from 'react'


require('./Header.css')
const HTop = () => {
  return (
    <nav>
    <div className="logo">
      <Link href="#">Your Logo</Link>
    </div>
    <ul className="nav-links">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default HTop