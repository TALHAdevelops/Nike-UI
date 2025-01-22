"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import AddToCartButton from "./Button";
import { urlFor } from '@/sanity/lib/image';

type Product = {
  productName: string;
  description: string;
  price: number;
  image: any;
  slug: string;
  quantity?: number; 
};

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-8 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{product.productName}</h1>
          <p className="mt-4 text-gray-600 text-sm leading-6">{product.description}</p>
          <p className="mt-6 text-xl font-semibold text-gray-800">Rs. {product.price}</p>
          <div className='mt-4 font-bold'>
            Quantity: 
            <input 
              type="number" 
              className='border-2 w-12 rounded-2xl h-9 text-center font-normal' 
              min={1} 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
            />
          </div>
          <div className="mt-6">
            <AddToCartButton product={{ ...product, quantity }} />
          </div>
        </div>
      </div>
    </div>
  );
}
