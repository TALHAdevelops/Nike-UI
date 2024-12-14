"use client"
import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {products} from '@/app/components/productdata';
import Image from 'next/image';

type Props = {
  params: {
    id: string
  }
}

export default function ProductDetail({ params }: Props) {
  const { id } = params;

  const product = products.find((product) => product.d === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto h-screen">
        <div className="md:w-1/2">
          <Image
            src={product.image.src}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600 text-sm leading-6">
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
