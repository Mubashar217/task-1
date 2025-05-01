"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "AirBrush Foundation 3pc Set",
    price: "$00.00",
    image: "/cardmart1.png",
    swatches: [
      "#e8d0c0",
      "#d1ac8b",
      "#c0997e",
      "#a97761",
      "#8d5d4a",
      "#5c3e2b",
    ],
  },
  {
    id: 2,
    title: "Powder Foundation & Mascara",
    price: "$00.00",
    image: "/cardmart2.png",
    swatches: [
      "#e8d0c0",
      "#d1ac8b",
      "#c0997e",
      "#a97761",
      "#8d5d4a",
      "#5c3e2b",
    ],
  },
  {
    id: 3,
    title: "AirTint Tinted Moisturizing Set",
    price: "$00.00",
    image: "/cardmart3.png",
    swatches: [
      "#e8d0c0",
      "#d1ac8b",
      "#c0997e",
      "#a97761",
      "#8d5d4a",
      "#5c3e2b",
    ],
  },
  {
    id: 4,
    title: "AirBrush Foundation Spray",
    price: "$00.00",
    image: "/cardmart4.png",
    swatches: [
      "#e8d0c0",
      "#d1ac8b",
      "#c0997e",
      "#a97761",
      "#8d5d4a",
      "#5c3e2b",
    ],
  },
];

export default function Cardmart() {
  const [shade, setShade] = useState<string | null>(null);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const handleProductClick = (id: number | null) => {
    setActiveProductId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-10 px-4 md:px-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Jerome’s Top Picks
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex md:grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex-shrink-0 w-96 md:w-auto bg-white rounded-lg p-4 flex flex-col items-center space-y-3 cursor-pointer"
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
                  {product.swatches && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {product.swatches.map((color, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShade(color);
                          }}
                          className={`w-5 h-5 rounded-full border-2 ${
                            shade === color ? "border-black" : "border-gray-300"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}

                  <button className="mt-2 w-full bg-red-200 hover:bg-pink-300 text-xs px-4 py-2 cursor-pointer rounded">
                    ADD TO CART
                  </button>

                  {product.swatches && (
                    <button className="border mt-2 w-full border-gray-400 text-xs px-4 py-2 cursor-pointer rounded">
                      FIND MY SHADE
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
