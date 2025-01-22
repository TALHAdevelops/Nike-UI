import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import product data from a separate file for better reusability
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function Page() {
  const query = `*[_type == 'product' && category == "Men's Shoes"]{
  productName,
  "slug":slug.current,
  category,
  status,
  colors,
  image,
  price
}`;
  const items = await client.fetch(query);
 
  
  return (
    <div>
     
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">New (500)</h1>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-semibold">Hide Filters</button>
              <button className="text-sm font-semibold">Sort By</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="hidden md:block border-r pr-4">
              <ul className="space-y-4">
                {/* Categories */}
                <li>
                  <h2 className="font-semibold text-lg mb-2">Categories</h2>
                  <ul className="space-y-2 text-sm">
                    <li>Shoes</li>
                    <li>Sports Bras</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Accessories & Equipment</li>
                  </ul>
                </li>

                {/* Gender */}
                <li>
                  <h2 className="font-semibold text-lg mb-2">Gender</h2>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <input type="checkbox" id="men" />
                      <label htmlFor="men" className="ml-2">
                        Men
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="women" />
                      <label htmlFor="women" className="ml-2">
                        Women
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="unisex" />
                      <label htmlFor="unisex" className="ml-2">
                        Unisex
                      </label>
                    </li>
                  </ul>
                </li>

                {/* Shop By Price */}
                <li>
                  <h2 className="font-semibold text-lg mb-2">Shop By Price</h2>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <input type="checkbox" id="under2500" />
                      <label htmlFor="under2500" className="ml-2">
                        Under ₹ 2,500.00
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="above2500" />
                      <label htmlFor="above2500" className="ml-2">
                        ₹ 2,501.00 - ₹ 5,000.00
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Product Grid */}
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item : any) => (
                <div key={item.slug} className="border rounded-lg overflow-hidden">
                  
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={500}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-orange-500">{item.status}</p>
                    <h3 className="font-semibold text-lg">
                    <Link href={`/products/${item.slug}`}>
                             {item.productName}
                                            </Link>
                    </h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-sm text-gray-500">{item.colors}</p>
                    <p className="text-lg font-bold">Rs. {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}
