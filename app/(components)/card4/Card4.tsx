"use client";

import Image from "next/image";

const Card4 = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/bigcard1.jpg"
            alt="Makeup Stackables"
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded"
          />
          <h2 className="text-4xl mt-4">
            All the Makeup You Need in One Place
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            dui a lectus facilisis mollis.
          </p>
          <a
            href="#"
            className="text-xl text-black  font-medium underline mt-2"
          >
            Shop Stackables
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/bigcard2.jpg"
            alt="Face Perfection"
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded"
          />
          <h2 className="text-4xl  mt-4">Complexion Meets Perfection</h2>
          <p className="text-lg text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            dui a lectus facilisis mollis.
          </p>
          <a href="#" className="text-xl text-black font-medium underline mt-2">
            Shop Face
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card4;
