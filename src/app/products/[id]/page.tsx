"use client"
import React from 'react';
import { notFound } from 'next/navigation'; // For handling invalid IDs
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {products} from '@/app/components/productdata'; // Importing the product data
import Image from 'next/image';

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params;
  
    // Find the product by ID
    const product = products.find((product) => product.id === parseInt(id));
  
    if (!product) {
      notFound(); // Handle the 404 page
    }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto h-screen">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.image.src} // Dynamically use the product image
            alt={product.name}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600 text-sm leading-6">
            {/* Add description or custom text here */}
            Turn style on its head with this crafted take on the {product.name}.
            Its unique layering and exposed foam accents elevate this timeless design.
          </p>
          <p className="mt-6 text-2xl font-semibold text-gray-900">{product.price}</p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
