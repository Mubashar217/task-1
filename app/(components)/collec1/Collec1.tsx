'use client';

import Image from 'next/image';

export default function Collec1() {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <h2 className="text-center text-4xl md:text-4xl font-serif italic mb-12">
        Flawless Coverage for All
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        
        <div className="flex-shrink-0">
          <Image
            src="/collect1.jpg" 
            alt="Product Demo"
            width={400}
            height={500}
            className="rounded-md object-cover"
          />
        </div>

        
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 md:gap-55  gap-5">
          {products.map((product) => (
            <div key={product.title} className="text-center">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <Image
                src={product.image}
                alt={product.title}
                width={130}
                height={220}
                className="mx-auto mb-4"
              />
              
              
              <a href={product.link} className="text-black underline text-sm ">
                {product.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    title: 'AirBrush',
    description: 'Flawless Finish Foundation',
    image: '/collect2.png',
    link: '#',
    linkText: 'Shop Airbrush',
  },
  {
    title: 'AirTint',
    description: 'Natural Tinted Moisturizer',
    image: '/collect3.png',
    link: '#',
    linkText: 'Shop AirTint',
  },
  {
    title: 'AirGlow',
    description: 'Sheer Radiant Color',
    image: '/collect4.png',
    link: '#',
    linkText: 'Shop AirGlow',
  },
];
