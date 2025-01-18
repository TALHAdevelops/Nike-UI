import React from 'react'
import Link from 'next/link'
import vectorlogo from "../../../public/Vector.png"
import nikelogo from "../../../public/nikelogo.png"
import search from "../../../public/search.png"
import likelogo from "../../../public/like.png"
import cartlogo from "../../../public/cart.png"
import Image from 'next/image'
export default function Navbar() {
  return (
    <div>
    <nav className='h-[96px] w-full'>
        <div className='w-full h-[36px] bg-[#F5F5F5] flex justify-between px-8 items-center'>
        <div>
            <Link href="/">
        <Image src={vectorlogo} alt='jordan' height={19.2} width={17.97} className='pt-1'/>
        </Link>
        </div>
        <div className='flex gap-7 text-[11px] font-500'>
            <div>Find a Store</div>
            <div>|</div>
            <Link href="/help">Help</Link>
            <div>|</div>
            <Link href="/joinUs">Join Us</Link>
            <div>|</div>
            <Link href= '/signIn'>Sign In</Link>
        </div>
        </div>


        <div className='w-full h-[60px] flex justify-between items-center text-center px-6'>
            <div>
            <Image src={nikelogo} alt='nike' height={20.54} width={58.85} className='pt-[28.51px] pl-[9.81px]'/>
            </div>
            <div className='flex gap-6 font-semibold pl-[120px]'>
                <Link href='/products'>New & Featured</Link>
                <Link href='/Men'>Men</Link>
                <Link href='/Women'>Women</Link>
                <div>Kids</div>
                <div>Sale</div>
                <div>SNKRS</div>
            </div>


            <div className='flex gap-5'>
                <div className='w-[180px] h-[40px] bg-[#F5F5F5] flex items-center gap-3 rounded-[100px]'>
                  
                        <Image src={search} alt='searchbutton' className='h-[20px] w-[20px] pl-[3.75px] pt-[3.75] '/>
                     
                    <div>
                         <input type="text" placeholder='Search' className='w-[84px] h-[36px] bg-[#F5F5F5]'/>
                         </div>
                         
                </div>

                <div className='flex gap-5 items-center'>
                    <Image src={likelogo} alt='like'   className='h-[20px] w-[25px] pt-[2.75px] pl-[3.75px] '/>
                
                    <Image src={cartlogo} alt='cart'  className='h-[21px] w-[20px] pt-[3.75px] pl-[3.75px]'/>
                </div>
              
              
            </div>
        </div>
    </nav>
    </div>
  )
}
