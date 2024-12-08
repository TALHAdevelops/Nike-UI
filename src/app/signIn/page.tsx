import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import nike from '../../../public/nikelogo.png';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className=" h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full flex flex-col items-center justify-center" >
      {/* Nike Logo */}
      <Image src={nike} alt="Nike Logo" className="mb-6" width={50} height={50} />

      {/* Title */}
      <h1 className="text-[23px] font-bold text-center mb-4">
        YOUR ACCOUNT <br /> FOR EVERYTHING <br />NIKE
      </h1>

      {/* Form */}
      <form className="w-[300px]">
        {/* Email Address */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Checkbox and Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="keepSignedIn" className="mr-2" />
            <label htmlFor="keepSignedIn" className="text-[12px]">
              Keep me signed in
            </label>
          </div>
          <Link href="#" className="text-[12px] text-gray-500 hover:underline">
            Forgotten your password?
          </Link>
        </div>

        {/* Privacy and Terms */}
        <p className="text-xs text-center text-gray-500 mb-6">
          By logging in, you agree to Nike&apos;s{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            Terms of Use
          </Link>.
        </p>

        {/* Sign-In Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md text-sm "
        >
          SIGN IN
        </button>
      </form>

      {/* Sign Up */}
      <p className="text-sm mt-4">
        Not a Member?{" "}
        <Link href="/joinUs" className="underline font-semibold">
          Join Us.
        </Link>
      </p>
    </div>
    </div>
      <Footer />
    </div>
  );
}
