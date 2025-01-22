"use client"

import Image from "next/image";
import React, { useState } from "react";
import pic1 from '../../../public/pic1.png'
import pic2 from '../../../public/pic2.png'
import pic3 from '../../../public/pic3.png'
import pic4 from '../../../public/pic15.png'
import pic5 from '../../../public/pic14.png'
import pic6 from '../../../public/pic13.png'
import pic7 from '../../../public/pic4.png'

const SHOES = () => {
  const shoes = [
    { id: 1, name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Women's Shoes", img: pic1 },
    { id: 2, name: "Nike Air Max Pulse", price: "₹ 13 995", category: "Men's Shoes", img: pic2 },
    { id: 3, name: "Nike Air Max 97 SE", price: "₹ 16 995", category: "Men's Shoes", img: pic3 },
    { id: 4, name: "Nike Air Max Plus", price: "₹ 14 995", category: "Women's Shoes", img: pic4 },
    { id: 5, name: "Nike Air Max 90", price: "₹ 12 995", category: "Men's Shoes", img: pic5 },
    { id: 6, name: "Nike Air Max TW", price: "₹ 15 995", category: "Women's Shoes", img: pic6 },
    { id: 7, name: "Nike Air Max 1", price: "₹ 13 495", category: "Men's Shoes", img: pic7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shoes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Best of Air Max</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden space-x-4">
        {shoes.slice(currentIndex, currentIndex + 3).map((shoe) => (
          <div key={shoe.id} className="flex-shrink-0 w-1/3">
            <div className="bg-gray-100 rounded-lg p-4">
              <Image width={200} height={200}
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold">{shoe.name}</h3>
              <p className="text-sm text-gray-500">{shoe.category}</p>
              <p className="text-sm font-medium">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;