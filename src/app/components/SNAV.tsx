import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import './snav.css'
import Link from 'next/link';
import nike from "../../../public/nikelogo.png"



const SNAV = () => {
  return (
    <div className='snav-main'>

        <div className="nike-img">
            <Link href="/">
            <Image width={36} height={36} src={nike} alt='nike-img'></Image>
            </Link>
        </div>
        <ul>
            <Link href="/products"><li>News & Featured</li></Link>
            <Link href="/Men"><li>Men</li></Link>
            <Link href="/Women"><li>Women</li></Link>
            <Link href="/"><li>Kids</li></Link>
            <Link href="/"><li>Sale</li></Link>
            <Link href="/products"><li>SNKERS</li></Link>
        </ul>

        <div className="search">
            <input type="search" placeholder='Search' />
            <CiHeart size={20}/>
           <Link href="/Cart"> <IoBagOutline size={15}/></Link>


        </div>

    </div>
  )
}

export default SNAV