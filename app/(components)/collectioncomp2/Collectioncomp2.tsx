'use client';

import Image from 'next/image';

const Collectioncomp2 = () => {
  return (
    <section className="w-full px-6 py-10 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Flawless Skin is the Heart of Every Luxurious Look</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
   
        <div className="flex flex-col items-center text-center">
          <Image src="/cop1.png" alt="Product 1" width={500} height={600} />
          <div className="flex text-red-200 space-x-1 text-lg">★★★★★</div>
          <p className="mt-3 font-medium">Illuminating Drops Liquid Highlighter</p>
          <p className="text-sm text-gray-500 mt-1">$22.00</p>
        </div>

       
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image src="/cop2.png" alt="Product 2" width={500} height={600} />
            <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">Best Seller</span>
          </div>
          <div className="flex text-red-200 space-x-1 text-lg">★★★★★</div>
          <p className="mt-3 font-medium">CC Cream Sunscreen SPF 25</p>
          <p className="text-sm text-gray-500 mt-1">$36.00</p>
        </div>

    
        <div className="w-full flex justify-center">
          <Image src="/mi.png" alt="Model holding product" width={450} height={600} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Collectioncomp2;
