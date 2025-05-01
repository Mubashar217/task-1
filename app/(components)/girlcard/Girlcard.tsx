"use client";

import Image from "next/image";

export default function Girlcard() {
  return (
    <section className=" max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-center bg-[#FBEAE6] mt-10">
      <div className="w-full md:w-1/2">
        <Image
          src="/girlcard.jpg"
          alt="Woman using skincare spray"
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 px-6 py-10 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Age Defying Skincare Makeup
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Your skin deserves superior care, and that’s why Jerome Alexander
          developed Jerome Alexander Skincare Makeup™, cosmetics infused with
          skincare active ingredients that hydrate, rejuvenate, and nourish
          skin! What sets Jerome Alexander apart from other brands on the
          market? Each product is formulated with a proprietary blend that
          perfectly balances skincare and makeup.
        </p>
        <button className="bg-[#51291E] text-white text-base md:text-lg px-8 py-3 rounded-md hover:bg-[#3d1f16] transition">
          SEE ALL SKINCARE ACTIVES
        </button>
      </div>
    </section>
  );
}
