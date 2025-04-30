'use client';

import Image from 'next/image';

export default function Card5() {
  return (
    <div className="w-full px-4 py-8 bg-white mt-20">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/cardmart1.png"
            alt="Airbrush Foundation Set"
            width={300}  
            height={300} 
            className="object-contain"
          />
          <p className="text-pink-600 font-semibold">AirBrush Foundation 3pc Set</p>
          <p className="text-black font-bold text-lg">$00.00</p>
          <button className="bg-red-300 hover:bg-pink-500 text-black px-6 py-2 rounded-md text-sm font-semibold transition">
            SHOP NOW
          </button>
        </div>

        <div className="md:col-span-3">
          <div className="w-full h-64 md:h-[500px] overflow-hidden relative">
            <Image
              src="/bigpic1.jpg"
              alt="Airbrush Banner"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <div className="md:col-span-3">
          <div className="w-full h-64 md:h-[500px]  overflow-hidden relative">
            <Image
              src="/card2.jpg"
              alt="Airbrush Banner"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/cardmart1.png"
            alt="Airbrush Foundation Set"
            width={300}  
            height={300} 
            className="object-contain"
          />
          <p className="text-pink-600 font-semibold">AirBrush Foundation 3pc Set</p>
          <p className="text-black font-bold text-lg">$00.00</p>
          <button className="bg-red-300 hover:bg-pink-500 text-black px-6 py-2 rounded-md text-sm font-semibold transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
