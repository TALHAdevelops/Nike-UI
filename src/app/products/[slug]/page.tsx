
import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type Props = {
  params: {
      slug: string
  }
}
export async function generateStaticParams() {
  // Query to fetch all posts and their slugs
  const query = `*[_type == 'product']{
    "slug": slug.current
  }`;

  // Fetching the slugs from the database or API
  const slugs = await client.fetch(query);

  // Mapping the slugs to an array of string routes
  const slugRoutes: string[] = slugs.map(
    ({ slug }: { slug: string }) => slug
  );

  // Returning the routes as an array of objects
  return slugRoutes.map((slug: string) => ({ slug }));
}

export default async function page({params}: Props) {
  
const query = `*[_type == 'product' && slug.current == "${params.slug}"]{
  productName,
  description,
  category,
  status,
  colors,
  image,
  price
}`;
  const products = await client.fetch(query);
 


  return (
    <div>
      <Navbar />

          
          {products.map((products: any) => (
            <div key={products.slug} className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto h-screen">
             <div className="md:w-1/2">
           <Image
             src={urlFor(products.image).url()}
             alt={products.ProductName}
             width={500}
             height={500}
             className="rounded-lg"
           />
         </div>
 
         <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
           <h1 className="text-xl font-bold text-gray-900">{products.productName}</h1>
           <p className="mt-4 text-gray-600 text-sm leading-6">
             {products.description}
           </p>
           <p className="mt-6 text-2xl font-semibold text-gray-900">Rs. {products.price}</p>
           <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800">
             Add to Cart
           </button>
         </div>
         </div>))
            }
          
         
       
       
       
      <Footer />
    </div>
  );
}
