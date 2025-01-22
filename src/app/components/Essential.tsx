import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ess1 from '../../../public/ess1.png'
import ess2 from '../../../public/ess2.png'
import ess3 from '../../../public/ess3.png'


const ESSENTIALS = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-xl font-bold mb-8">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src={ess1}
            alt="Men's Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Link href="/Men">Mens</Link>
          </button>
        </div>
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src={ess2}
            alt="Women's Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
          <Link href="/Women">Womens</Link>
          </button>
        </div>
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src={ess3}
            alt="Kids' Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
          <Link href="/thirdcompo/second">Kids</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ESSENTIALS;