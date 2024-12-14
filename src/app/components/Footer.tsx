import React from 'react'
import Image from 'next/image'
import twitter from "../../../public/twit.svg";
import facebook from "../../../public/fb.svg";
import youtube from "../../../public/you.svg";
import insta from "../../../public/insta.svg";
import pin from "../../../public/pin.png";

export default function Footer() {
  return (
    <div className='w-full bg-black'>
      {/* Main footer content */}
      <div className='max-w-[1372px] mx-auto px-4 py-8'>
        {/* Top section with links */}
        <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-4'>
          {/* First column */}
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-44'>
            <div className='text-white text-xs'>
              <div className='pb-3 md:pb-5 hover:text-gray-300 cursor-pointer'>FIND A STORE</div>
              <div className='pb-3 md:pb-5 hover:text-gray-300 cursor-pointer'>BECOME A MEMBER</div>
              <div className='pb-3 md:pb-5 hover:text-gray-300 cursor-pointer'>SIGN UP FOR EMAIL</div>
              <div className='pb-3 md:pb-5 hover:text-gray-300 cursor-pointer'>SEND US FEEDBACK</div>
              <div className='pb-3 md:pb-5 hover:text-gray-300 cursor-pointer'>STUDENT DISCOUNTS</div>
            </div>

            {/* Get Help Section */}
            <div className='text-xs'>
              <div className='text-white pb-4'>GET HELP</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Order Status</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Delivery</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Returns</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Payment Options</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Contact Us on Nike.com inquiries</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Contact Us on All other inquiries</div>
            </div>

            {/* About Nike Section */}
            <div className='text-xs'>
              <div className='text-white pb-4'>ABOUT NIKE</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>News</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Careers</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Investors</div>
              <div className='text-[#757575] pb-3 hover:text-gray-400 cursor-pointer'>Sustainability</div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex gap-4 justify-center md:justify-start'>
            <Image src={twitter} alt='twitter' className='w-6 h-6 cursor-pointer hover:opacity-80'/>
            <Image src={facebook} alt='facebook' className='w-6 h-6 cursor-pointer hover:opacity-80'/>
            <Image src={youtube} alt='youtube' className='w-6 h-6 cursor-pointer hover:opacity-80'/>
            <Image src={insta} alt='insta' className='w-6 h-6 cursor-pointer hover:opacity-80'/>
          </div>
        </div>

        {/* Bottom section */}
        <div className='mt-8 flex flex-col md:flex-row justify-between gap-4 text-xs'>
          {/* Location and copyright */}
          <div className='flex flex-wrap gap-2 items-center'>
            <div className='flex items-center gap-2'>
              <Image src={pin} alt='' className='h-[13.12px] w-[9.38px]'/>
              <h2 className='text-white'>India</h2>
            </div>
            <div className='text-[#757575]'>©2023 Nike, Inc. All Rights Reserved</div>
          </div>

          {/* Footer links */}
          <div className='text-[#757575] flex flex-wrap gap-4 md:gap-10'>
            <div className='hover:text-gray-400 cursor-pointer'>Guides</div>
            <div className='hover:text-gray-400 cursor-pointer'>Terms of Sales</div>
            <div className='hover:text-gray-400 cursor-pointer'>Terms of Use</div>
            <div className='hover:text-gray-400 cursor-pointer'>Nike Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}
