'use client';

import React from 'react';

const testimonials = [
  {
    rating: 5,
    message: 'Very pleased with the concealer that I purchased.',
    product: 'AirCushion Concealer + Skincare',
    name: 'Diana Cosgrove',
  },
  {
    rating: 5,
    message: 'Love it, makes me look younger.',
    product: 'Deluxe AirBrush 5 pc Set',
    name: 'Clare Brinker',
  },
  {
    rating: 5,
    message: 'The primer and foundation work very well together for a nice smooth look.',
    product: 'MagicMinerals AirBrush 3pc Set',
    name: 'Rochelle Sokol',
  },
  {
    rating: 5,
    message: "Wonderful product. I love that it's so easy for traveling.",
    product: 'Stackables Starter Stack',
    name: 'Carolyn Cecil',
  },
  {
    rating: 5,
    message: "Great coverage and feels light on the skin.",
    product: 'HD Matte Foundation',
    name: 'Emily Rhodes',
  },
  {
    rating: 5,
    message: "Blends perfectly with my skin tone. Highly recommend!",
    product: 'SilkTouch Compact Powder',
    name: 'Nina Torres',
  },
];

export default function TestimonialSlider() {
  return (
    <div
      className="w-full overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div
        className="flex space-x-6 p-8 min-w-[1920px]"
        style={{
          scrollbarWidth: 'none',
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[320px] border border-red-300 rounded-lg p-6 flex-shrink-0 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="text-red-200 text-lg mb-3 text-center">
              {'★'.repeat(item.rating)}
            </div>
            <p className="italic text-base text-gray-800 mb-3 text-center">{item.message}</p>
            <p className="text-sm text-gray-500 mb-3 text-center">{item.product}</p>
            <p className="font-semibold text-base text-center">{item.name}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
