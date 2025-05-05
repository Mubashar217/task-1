'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../(components)/navbar/Navbar';
import Footer from '../(components)/footer/Footer';

const categories = ['Foundation', 'Concealers & Correctors', 'Blush & Bronzer', 'Tools'];

const products = [
  {
    id: 1,
    title: 'AirBrush Foundation 3pc Set',
    price: '$00.00',
    image: '/cardmart1.png',
    swatches: ['#e8d0c0', '#d1ac8b', '#c0997e', '#a97761', '#8d5d4a', '#5c3e2b'],
  },
  {
    id: 2,
    title: 'Powder Foundation & Mascara',
    price: '$00.00',
    image: '/cardmart2.png',
    swatches: ['#e8d0c0', '#d1ac8b', '#c0997e', '#a97761', '#8d5d4a', '#5c3e2b'],
  },
  {
    id: 3,
    title: 'AirTint Tinted Moisturizing Set',
    price: '$00.00',
    image: '/cardmart3.png',
    swatches: ['#e8d0c0', '#d1ac8b', '#c0997e', '#a97761', '#8d5d4a', '#5c3e2b'],
  },
  {
    id: 4,
    title: 'AirBrush Foundation Spray',
    price: '$00.00',
    image: '/cardmart4.png',
    swatches: ['#e8d0c0', '#d1ac8b', '#c0997e', '#a97761', '#8d5d4a', '#5c3e2b'],
  },
];

export default function Collectionface() {
  const [shade, setShade] = useState<string | null>(null);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const handleProductClick = (id: number | null) => {
    setActiveProductId((prevId) => (prevId === id ? null : id));
  };

  return (
<div>
  <Navbar/>
<section className="bg-white py-2 px-4 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
      <div className="w-full h-60 relative mb-10">
        <Image src="/mackup.jpg" alt="Makeup Banner" fill className="object-cover" />
      </div>

      {categories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-pink-300">
            {category}
          </h2>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.map((product) => (
                <div
                  key={`${category}-${product.id}`}
                  onClick={() => handleProductClick(product.id)}
                  className="flex-shrink-0 w-full bg-white rounded-lg p-4 flex flex-col items-center space-y-3 cursor-pointer shadow-md"
                >
                  <div className="w-full h-96 relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex text-red-200 space-x-1 text-lg">★★★★★</div>
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="font-bold">{product.price}</p>

                  {activeProductId === product.id && (
                    <>
                      <div className="flex flex-wrap justify-center gap-2">
                        {product.swatches.map((color, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShade(color);
                            }}
                            className={`w-5 h-5 rounded-full border-2 ${
                              shade === color ? 'border-black' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <button className="mt-2 w-full bg-red-200 hover:bg-pink-300 text-xs px-4 py-2 cursor-pointer rounded">
                        ADD TO CART
                      </button>

                      <button className="border mt-2 w-full border-gray-400 text-xs px-4 py-2 cursor-pointer rounded">
                        FIND MY SHADE
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
    <Footer/>
</div>
  );
}
