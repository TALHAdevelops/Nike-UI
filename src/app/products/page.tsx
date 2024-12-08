import React from 'react'
import Image from 'next/image';
export default function page() {
    const products = [
        {
          id: 1,
          label: "Just In",
          name: "Nike Air Force 1 Mid '07",
          category: "Men's Shoes",
          colors: "1 Colour",
          price: "₹ 10 795.00",
          image: "/path/to/image1.jpg", // Replace with actual image paths
        },
        {
          id: 2,
          label: "Just In",
          name: "Nike Court Vision Low Next Nature",
          category: "Men's Shoes",
          colors: "1 Colour",
          price: "₹ 4 995.00",
          image: "/path/to/image2.jpg",
        },
        {
          id: 3,
          label: "Just In",
          name: "Nike Air Force 1 PLT.AF.ORM",
          category: "Women's Shoes",
          colors: "1 Colour",
          price: "₹ 8 695.00",
          image: "/path/to/image3.jpg",
        },
        {
          id: 4,
          label: "Just In",
          name: "Nike Air Force 1 React",
          category: "Men's Shoes",
          colors: "1 Colour",
          price: "₹ 13 295.00",
          image: "/path/to/image4.jpg",
        },
        {
          id: 5,
          label: "Promo Exclusion",
          name: "Air Jordan 1 Elevate Low",
          category: "Women's Shoes",
          colors: "1 Colour",
          price: "₹ 11 895.00",
          image: "/path/to/image5.jpg",
        },
        {
          id: 6,
          label: "Just In",
          name: "Nike Standard Issue",
          category: "Women's Basketball Jersey",
          colors: "1 Colour",
          price: "₹ 2 895.00",
          image: "/path/to/image6.jpg",
        },
        {
            id: 7,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 8,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 9,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 10,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 11,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 12,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 13,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 14,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
          {
            id: 15,
            label: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            colors: "1 Colour",
            price: "₹ 2 895.00",
            image: "/path/to/image6.jpg",
          },
      ];
    
      return (
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
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs text-gray-500">{product.label}</p>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                      <p className="text-sm text-gray-500">{product.colors}</p>
                      <p className="text-lg font-bold">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }