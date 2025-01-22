import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import msg1 from "../../../public/msg1.png"
import msg2 from "../../../public/msg.png"
import pin from "../../../public/location.png"
import mob from "../../../public/mob.png"
import bad from "../../../public/bad.png"
import good from "../../../public/good.png"
export default function page() {
  return (
    <div>
       
        <div className="min-h-screen p-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold uppercase">Get Help</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="mt-2 w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            What Payment Options Can I Use on Nike Orders?
          </h2>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-6">
            <Link href="#" className='underline'>Nike Members</Link> can store multiple debit or credit cards in their
            profile for faster checkout. If you’re not already a Member,{" "}
            <a href="#" className="font-medium underline">
              join us
            </a>{" "}
            today.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-4 rounded-full">Join Us</button>
            <button className="bg-black text-white py-2 px-4 rounded-full">Shop Nike</button>
          </div>

             {/* FAQs Section */}
             <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            {/* FAQ 1 */}
            <div className="mb-4">
              <p className="font-semibold">Does my card need international purchases enabled?</p>
              <p className="text-gray-600">
                Yes, we recommend asking your bank to enable international purchases on your card. You will
                be notified at checkout if international purchases need to be enabled.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="mb-4">
              <p className="font-semibold">Can I pay for my order with multiple methods?</p>
              <p className="text-gray-600">
                No, payment for Nike orders can’t be split between multiple payment methods.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="mb-4">
              <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
              <p className="text-gray-600">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="mb-4">
              <p className="font-semibold">Why don&apos;t I see Apple Pay as an option?</p>
              <p className="text-gray-600">
                To see Apple Pay as an option, you&apos;ll need a compatible Apple device running the latest OS,
                be signed into your iCloud account, and have a supported card in your Wallet. Additionally,
                you&apos;ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
          <div className=''>
            Was this answers Helpful?
            <div className='flex'>
                <Image src={good} alt=''/>
                <Image src={bad} alt=''/>
            </div>
            <div className='mt-4 text-[#757575]'>RELATED</div>
            <div className='mt-5 ml-7'>
                <Link href='#' className=' underline '>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</Link>
            </div>
            <div className='mt-5 ml-7 mb-5'>
                <Link href='#' className='underline'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
            </div>
          </div>
        </div>


        {/* Right Section */}
        <div className="border-l-4 pl-16 grid grid-cols-1">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">
            <Image src={mob} alt=''/>
            <strong>000 800 919 0566</strong>
            <br />
            Products & Orders: 24 hours a day,<br /> 7 days a week
          </p>
          <p className="mb-4">
            <Image src={msg1} alt=''/>
            <strong>24 hours a day</strong>
            <br />
            7 days a week
          </p>
          <p className="mb-4">
          <Image src={msg2} alt=''/>
            <strong>We’ll reply within</strong>
            <br />
            five business days
          </p>
          <p>
          <Image src={pin} alt=''/>
            <strong>Store Locator</strong>
            <br />
            Find Nike retail stores near you
          </p>
        </div>
      </div>
    </div>

     
    </div>
  )
}
