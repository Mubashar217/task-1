"use client";

import { useState } from "react";

export default function Pdpmain() {
    const [quantity, setQuantity] = useState(1);
    const [selectedShade, setSelectedShade] = useState("Warm Medium");
    const [subscribe, setSubscribe] = useState(true);
    const [mainImage, setMainImage] = useState("/pdpmainimg.jpg");

    const shades = [
        "Warm Medium",
        "Light",
        "Medium",
        "Tan",
        "Deep",
        "Rich",
        "Mocha",
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="flex gap-4 items-start">
                <div className="flex flex-col gap-2">
                    <img
                        src="/2pdp.png"
                        alt="Thumbnail 1"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/2pdp.png")}
                    />
                    <img
                        src="/3pdp.jpg"
                        alt="Thumbnail 2"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/3pdp.jpg")}
                    />
                    <img
                        src="/4pdp.jpg"
                        alt="Thumbnail 3"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/4pdp.jpg")}
                    />
                    <img
                        src="/5pdp.jpg"
                        alt="Thumbnail 4"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/5pdp.jpg")}
                    />
                    <img
                        src="/6pdp.jpg"
                        alt="Thumbnail 5"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/6pdp.jpg")}
                    />
                    <img
                        src="/6pdp.jpg"
                        alt="Thumbnail 6"
                        className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                        onClick={() => setMainImage("/6pdp.jpg")}
                    />
                </div>

                <img
                    src={mainImage}
                    alt="Foundation Set"
                    className="rounded-lg shadow-md w-[420px] object-cover"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">AirBrush Foundation 3pc Set</h1>
                <p className="text-gray-700 text-lg font-medium">$45.00</p>

                <div>
                    <p className="font-medium mb-2">SHADE: {selectedShade}</p>
                    <div className="flex flex-wrap gap-2">
                        {shades.map((shade) => (
                            <button
                                key={shade}
                                className={`w-8 h-8 rounded-full border-2 ${selectedShade === shade ? "border-black" : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: "#d2a679" }}
                                onClick={() => setSelectedShade(shade)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={subscribe}
                            onChange={() => setSubscribe(true)}
                        />
                        Subscribe & Save 15%: $38.25
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={!subscribe}
                            onChange={() => setSubscribe(false)}
                        />
                        One-time purchase
                    </label>
                </div>

                <div className="flex items-center gap-4">
                    <p className="font-medium">QUANTITY</p>
                    <div className="flex items-center border px-2 py-1 rounded-md w-fit">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                            −
                        </button>
                        <span className="mx-4">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <button className="bg-red-200 text-white py-2 rounded-md cursor-pointer">
                        ADD TO CART
                    </button>
                    <button className="border border-gray-500 py-2 rounded-md cursor-pointer">
                        FIND MY SHADE
                    </button>
                </div>

                <div className="text-sm text-gray-500 flex gap-4 mt-2">
                    <span> Free shipping on order $50+</span>
                    <span> Free and easy returns</span>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mt-6 mb-2">Description</h2>
                    <p className="text-sm text-gray-700">
                        MagicMinerals AirBrush Foundation gives you a flawless finish in
                        minutes, without caking or streaking...
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                        <li>LiquidSilk Air Primer</li>
                        <li>AirBrush Foundation Spray</li>
                        <li>Kabuki Brush</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
