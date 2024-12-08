import React from 'react'
import Image from 'next/image'
import twitter from "../../../public/twit.svg";
import facebook from "../../../public/fb.svg";
import youtube from "../../../public/you.svg"
import insta from "../../../public/insta.svg"
import pin from "../../../public/pin.png"
export default function Footer() {
  return (
    <div className='w-[1440px] h-[331px] bg-black items-center'>
            <div className='w-[1372px] h-[213px] flex justify-between'>


            <div className='w-[1029px] h-[213px] ml-10 py-10 flex gap-44'>
                <div className='text-white text-[10px]'>
                    <div className='pb-5'>FIND A STORE</div>
                    <div className='pb-5'>BECOME A MEMBER</div>
                    <div className='pb-5'>SIGN UP FOR EMAIL</div>
                    <div className='pb-5'>SEND US FEEDBACK</div>
                    <div className='pb-5'>STUDENT DISCOUNTS</div>
                </div>

                <div className=' text-[10px]'>
                    <div className='text-white pb-4'>GET HELP</div>
                    <div className='text-[#757575] pb-4'>Order Status</div>
                    <div className='text-[#757575] pb-4'>Delivery</div>
                    <div className='text-[#757575] pb-4'>Returns</div>
                    <div className='text-[#757575] pb-4'>Payment Options</div>
                    <div className='text-[#757575] pb-4'>Contact Us on Nike.com inquiries</div>
                    <div className='text-[#757575] pb-4'>Contact Us on All other inquiries</div>
                </div>
                <div className=' text-[10px]'>
                    <div className='text-white pb-4'>ABOUT NIKE</div>
                    <div className='text-[#757575] pb-4'>News</div>
                    <div className='text-[#757575] pb-4'>Careers</div>
                    <div className='text-[#757575] pb-4'>Investors</div>
                    <div className='text-[#757575] pb-4'>Sustainability</div>
            </div>
            </div>

            <div className='flex -mt-28 gap-4'>
                <Image src={twitter} alt='twitter'/>
                <Image src={facebook} alt='facebook'/>
                <Image src={youtube} alt='youtube'/>
                <Image src={insta} alt='insta'/>
            </div>
    </div>
    <div className='w-[1372] h-[62] mt-16 ml-5 flex justify-between'>
        <div className='flex gap-2 items-center'>
            <Image src={pin} alt='' className='h-[13.12px] w-[9.38px]'/>
            <h2 className='text-white'>India</h2>
            <div className='text-[#757575]'>©2023 Nike, Inc. All Rights Reserved</div>
        </div>

        <div className='text-[#757575] flex gap-10'>
            <div>Guides</div>
            <div>Terms of Sales</div>
            <div>Terms of Use</div>
            <div>Nike Privacy Policy</div>
        </div>
    </div>
    </div>
  )
}
