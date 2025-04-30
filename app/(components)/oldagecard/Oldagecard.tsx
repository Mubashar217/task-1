'use client';

import Image from 'next/image';

export default function Oldagecard() {
  return (
    <section className="w-full bg-[#f4dcdc] px-6 py-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center">
      
      <div className="relative w-full lg:w-1/2 max-w-[600px]">
        <div className="absolute -left-6 -top-6 w-full h-full bg-[#e4c4c4] -z-10 rounded" />
        <Image
          src="/old.jpg"
          alt="Testimonial Person"
          width={700}
          height={700}
          className="w-full h-[500px] object-cover rounded z-10 shadow-2xl"
        />
      </div>

      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16 text-center lg:text-left">
        <blockquote className="text-3xl italic font-semibold text-gray-800 mb-4">
          “Every woman deserves to feel beautiful”
        </blockquote>
        <p className="text-gray-700 mb-4 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
          volutpat. In dui massa, scelerisque sit amet tincidunt eu, hendrerit
          nec velit. Vivamus fermentum orci vitae libero lacinia, non aliquet
          sapien feugiat.
        </p>
        <p className="text-gray-700 mb-6 text-2xl">
          Vivamus fermentum orci vitae libero lacinia, non aliquet sapien
          feugiat. Donec sit amet pharetra justo, sit amet tempor arcu.
        </p>
        <button className="bg-rose-950 text-white px-6 py-3 text-sm rounded hover:bg-gray-800 transition">
          Meet Roxana
        </button>
      </div>
    </section>
  );
}
