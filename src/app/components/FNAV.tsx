import Image from 'next/image'
import React from 'react'
import './fnav.css'
import Link from 'next/link'
import vectorlogo from "../../../public/Vector.png"

const FNAV = () => {
  return (
    <div>
        <div className="frstnav">
            <div className="ft">
             <Link href='/' ><Image width={36} height={36} src={vectorlogo} alt='ft-photo'></Image> </Link>
            </div>
            
            <ul className=''>
                <li> <Link href="/FindStore">Find a Store</Link></li>
                <li>|</li>
                <Link href="/help"><li>Help</li></Link>
                <li>|</li>
                <li><Link href="/joinUs">Join Us</Link></li>
                <li>|</li>
                <li> <Link href="/signIn">Sign In</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default FNAV