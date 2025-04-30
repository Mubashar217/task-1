'use client';

import Image from 'next/image';

const beforeAfterData = [
  {
    before: '/effect1.png',
   
  },
  {
    before: '/effect2.png',
    name: 'Vanessa R.',
    caption: 'Wearing Airbrush Foundation',
  },
  
  {
    before: '/effect3.png',
  },
];

export default function Aftereffect() {
  return (
    <div className="bg-white py-10 px-4 md:px-20 text-center mt-10">
      <h2 className="text-xl md:text-3xl font-medium">Real Women, Real Results</h2>
      <p className="text-sm text-gray-600 mb-8">Flawless Beauty</p>

      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer text-2xl text-gray-400 hover:text-black">
          &lt;
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x scroll-smooth px-4 md:px-10 w-full">
          {beforeAfterData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px]">
              <div className="relative w-full h-[180px]">
                <Image
                  src={item.before}
                  alt="Before"
                  layout="fill"
                  className="object-fill rounded"
                  priority
                />
              </div>
              {item.name && (
                <div className="mt-2 text-xs">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer text-2xl text-gray-400 hover:text-black">
          &gt;
        </div>
      </div>
    </div>
  );
}
