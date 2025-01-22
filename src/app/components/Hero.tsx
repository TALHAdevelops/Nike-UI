"use client";
import React, { useState } from "react";
import mainshoe from "../../../public/mainshoe.png";
import Image from "next/image";
import womenmax from "../../../public/womenmax.png";
import menmax from "../../../public/menmax.png";
import maxblue from "../../../public/maxblue.png";
import fimg from "../../../public/f.img.png";
import men1 from "../../../public/men1.png";
import men2 from "../../../public/men2.png";
import women1 from "../../../public/women1.png";
import women2 from "../../../public/women2.png";
import dontmiss from "../../../public/dontmiss.png";
import ess1 from "../../../public/ess1.png"
import ess2 from "../../../public/ess2.png"
import ess3 from "../../../public/ess3.png"
import Link from "next/link";
export default function Hero() {
  const products = [
    {
      id: 1,
      image: womenmax,
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹13,995",
    },
    {
      id: 2,
      image: menmax,
      title: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹13,995",
    },
    {
      id: 3,
      image: maxblue,
      title: "Nike Air Max 97 SE",
      category: "Men's Shoes",
      price: "₹16,995",
    },
    {
      id: 4,
      image: womenmax,
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹13,995",
    },
  ];

  const menscollection = [
    {
      id: 1,
      image: men1,
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Short-Sleeve Running Top",
      price: "₹ 3,895",
    },
    {
      id: 2,
      image: men2,
      title: "Nike Dri-FIT Challenger",
      category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: "₹ 3,895",
    },
  ];

  const womencollection = [
    {
      id: 1,
      image: women1,
      title: "Nike Dri-FIT ADV Run Division",
      category: "Women's Long-Sleeve Running Top",
      price: "₹ 5,295",
    },
    {
      id: 2,
      image: women2,
      title: "Nike Fast",
      category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "₹ 3,795",
    },
  ];

  // States for each slider
  const [currentIndex, setCurrentIndex] = useState(0); // Best of Air Max slider
  const [menIndex, setMenIndex] = useState(0); // Shop Men's slider
  const [womenIndex, setWomenIndex] = useState(0); // Shop Women's slider

  // Navigation functions for each slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= Math.ceil(products.length / 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.ceil(products.length / 3) - 1 : prevIndex - 1
    );
  };

  const nextMenSlide = () => {
    setMenIndex((prevIndex) =>
      prevIndex + 1 >= menscollection.length ? 0 : prevIndex + 1
    );
  };

  const prevMenSlide = () => {
    setMenIndex((prevIndex) =>
      prevIndex - 1 < 0 ? menscollection.length - 1 : prevIndex - 1
    );
  };

  const nextWomenSlide = () => {
    setWomenIndex((prevIndex) =>
      prevIndex + 1 >= womencollection.length ? 0 : prevIndex + 1
    );
  };

  const prevWomenSlide = () => {
    setWomenIndex((prevIndex) =>
      prevIndex - 1 < 0 ? womencollection.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full items-center">
      {/* Top Section */}
      <div className="w-full h-[58px] bg-[#F5F5F5] items-center text-center py-2">
        <div className="font-semibold text-[15px] pb-1">Hello Nike App</div>
        <div className="text-[11px]">
          Download the app to access everything Nike.{" "}
          <a href="#" className="underline font-semibold">
            Get Your Great
          </a>
        </div>
      </div>

      {/* Main Shoe Section */}
      <div className="w-[1344px] h-[977px] items-center text-center mb-4">
        <Image src={mainshoe} alt="main shoe" className="h-[700px] pl-[48px]" />
        <div className="w-[1008px] h-[299px] pl-[400px] pt-11">
          <div className="font-[500]">First Look</div>
          <h1 className="text-[56px] font-[500]">NIKE AIR MAX PULSE</h1>
          <p className="font-[400] text-[15px] py-5">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            --designed to push your limits and help you to go to the max.
          </p>
          <div className="flex gap-5 pl-[190px]">
            <button className="bg-black text-white w-[111px] h-[40px] rounded-full">
              Notify Me
            </button>
            <button className="bg-black text-white w-[145px] h-[40px] rounded-full">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="flex justify-between ml-10 mt-16 w-screen">
        <div className="text-[23px] font-medium">Best of Air Max</div>
        <div>
          Shop
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[441px] flex-shrink-0 h-[510px] px-5"
            >
              <Image src={product.image} alt={product.title} />
              <div className="flex justify-between pt-5">
                <div>
                  <div className="font-semibold">{product.title}</div>
                  <div className="text-[#757575]">{product.category}</div>
                </div>
                <div className="font-semibold text-[15px]">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[200px] ml-10">
        <div className="text-[23px] pb-10 font-medium">Featured</div>

        <Image src={fimg} alt="image" />
      </div>

      <div className="mt-16 text-center">
        <div className="font-semibold text-[54px]">
          STEP INTO WHAT FEELS GOOD
        </div>
        <div className="py-7">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </div>
        <button className="bg-black text-white w-[145px] h-[40px] rounded-full my-7">
          <Link href='/products'>Find your Shoe</Link>
        </button>
      </div>
      {/* Gear Up Section */}
      <div className="mt-16 ml-10">
        <div className="text-[23px] font-medium">Gear Up</div>
        <div className="m-7 grid grid-cols-2 w-[1344px] h-[561px]">
          {/* Men's Collection */}
          <div className="w-[666px] h-[509px] float-right">
            <div className="mb-10 float-right">
              Shop Men&apos;s
              <button
                onClick={prevMenSlide}
                className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
              >
                &lt;
              </button>
              <button
                onClick={nextMenSlide}
                className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
              >
                &gt;
              </button>
            </div>
            <div
              className="flex gap-3 transition-transform duration-700 ease-in-out mt-16"
              style={{
                transform: `translateX(-${menIndex * 100}%)`,
              }}
            >
              {menscollection.map((item) => (
                <div key={item.id} className="h-[393px] w-[300px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-[300px]"
                  />
                  <div className="flex justify-between pt-5">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-[#757575] w-[140px]">
                        {item.category}
                      </div>
                    </div>
                    <div className="font-semibold text-[15px]">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Women's Collection */}
          <div className="w-[666px] h-[509px] float-right">
            <div className="mb-10 float-right">
              Shop Women&apos;s
              <button
                onClick={prevWomenSlide}
                className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
              >
                &lt;
              </button>
              <button
                onClick={nextWomenSlide}
                className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
              >
                &gt;
              </button>
            </div>
            <div
              className="flex gap-3 transition-transform duration-700 ease-in-out mt-16"
              style={{
                transform: `translateX(-${womenIndex * 100}%)`,
              }}
            >
              {womencollection.map((item) => (
                <div key={item.id} className="h-[393px] w-[300px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-[300px]"
                  />
                  <div className="flex justify-between pt-5">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-[#757575] w-[140px]">
                        {item.category}
                      </div>
                    </div>
                    <div className="font-semibold text-[15px]">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-14">
        <div className="font-medium text-[23px] mb-3">
            Don&apos;t Miss
        </div>
        <div>
            <Image
            src={dontmiss}
            alt=""
            className="mb-11"/>
            <div className="text-center">
                <div className="font-medium text-[52px]  mb-5">FLIGHT ESSENTIALS</div>
            <div className="text-center mb-3">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</div>
            <button className="bg-black text-white w-[80px] h-[40px] rounded-full my-7">
          <Link href="/products">Shop</Link>
        </button></div>
        </div>
      </div>


      <div className="mt-10 ml-11">
        <div>
            <div className="font-medium text-[23px] mb-3">
            The Essentials
             </div>
             <div className="flex gap-3 ">
                <Image src={ess1} alt=""/>
                <Image src={ess2} alt=""/>
                <Image src={ess3} alt=""/>
             </div>
      </div>
    </div>

    <div className="flex text-center my-16 mx-[200px] gap-52">
        <div>
            <h2 className="font-medium text-lg">Icons</h2>
            <div className="text-[#757575] my-2 w-32">Air Force 1</div>
            <div className="text-[#757575] my-2">Huarache</div>
            <div className="text-[#757575] my-2">Air Max 90</div>
            <div className="text-[#757575] my-2">Air Max 95</div>
        </div>
        <div>
            <h2 className="font-medium text-lg">Shoes</h2>
            <div className="text-[#757575] my-2 w-32">All Shoes</div>
            <div className="text-[#757575] my-2">Custom Shoes</div>
            <div className="text-[#757575] my-2">Jordan Shoes</div>
            <div className="text-[#757575] my-2">Running Shoes</div>
            
        </div>
        <div>
            <h2 className="font-medium text-lg">Clothing</h2>
            <div className="text-[#757575] my-2 w-32">All Clothing</div>
            <div className="text-[#757575] my-2">Modest Wear</div>
            <div className="text-[#757575] my-2">Hoodies & Pullovers</div>
            <div className="text-[#757575] my-2">Shirts & Tops</div>
        </div>
        <div>
            <h2 className="font-medium text-lg">Kids</h2>
            <div className="text-[#757575] my-2 w-32">Infant & Toddler Shoes</div>
            <div className="text-[#757575] my-2">Kids Shoes</div>
            <div className="text-[#757575] my-2">Kids Jordan Shoes</div>
            <div className="text-[#757575] my-2 ">Kids Basketball Shoes</div>
        </div>
    </div>
    </div>
  );
}
