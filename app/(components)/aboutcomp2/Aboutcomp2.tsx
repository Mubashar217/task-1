'use client'

import Image from 'next/image';
import React from 'react';

const timeline = [
  {
    year: '1968',
    text: 'The Jerome Alexander Brand is born and originally starts selling wigs.',
    image: '/images/1968.png',
  },
  {
    year: '1969',
    text: 'Jerome Alexander releases his first book “Instant Beauty with Wash n Wear Wigs”.',
    image: '/images/1969.png',
  },
  {
    year: '1970',
    text: 'Jerome Alexander begins moving into the world of cosmetic products and becomes known as top cosmetics brand the world over.',
    image: '/images/1970.png',
  },
  {
    year: '1976',
    text: 'Jerome Alexander creates the first line of professional makeup brushes and tools.',
    image: '/images/1976.png',
  },
  {
    year: '1977',
    text: 'Launches a line of Professional Coloring Sets, makeup to complement his professional brushes.',
    image: '/images/1977.png',
  },
  {
    year: '1979',
    text: 'Jerome Alexander Cosmetics become available in high-end department stores across the United States.',
    image: '/images/1979.png',
  },
  {
    year: '1980',
    text: 'Jerome Alexander’s journey as a makeup artist continues to evolve as he puts more emphasis on proper makeup application and education.',
    image: '/images/1980.png',
  },
  {
    year: '1982',
    text: 'The Jerome Alexander cosmetic range expands to include not only color cosmetics but also skincare, hair brushes, and accessories.',
    image: '/images/1982.png',
  },
  {
    year: '1983',
    text: 'Jerome Alexander publishes his second book, “Be Your Own Makeup Artist” critically acclaimed as “…one of the best, most complete works on subject of makeup.”',
    image: '/images/1983.png',
  },
];

export default function Aboutcomp2() {
  return (
    <div className="relative bg-white py-24">
      <h2 className="text-center text-4xl font-semibold text-black mb-20">The History of Jerome Alexander</h2>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute left-1/2 top-0 h-full w-[2px] border-l-2 border-dotted border-pink-300 transform -translate-x-1/2 z-0"></div>
        <div className="relative z-10 space-y-32">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}
            >
              <div className="md:w-1/2 w-full">
                <div className="relative h-60 md:h-72 w-full rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Image for ${item.year}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-md">
                  <p className="text-pink-600 text-2xl font-semibold mb-2">{item.year}</p>
                  <p className="text-gray-800 text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
