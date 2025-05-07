"use client";

import Image from "next/image";

export default function Pdp2() {
    return (
        <div className="py-12 bg-white text-center mt-10">
            <div className="max-w-4xl mx-auto mb-40">
                <Image
                    src="/bigimge1.png"
                    alt="Video thumbnail"
                    width={960}
                    height={453}
                    className="rounded-lg mx-auto"
                />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-10">
                Makeup Essentials + Anti-aging Skincare In One
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
                Our multitasking formula is infused with the Jerome Alexander Skincare
                Makeup® proprietary blend of skincare actives and delivers immediate
                results and long-term anti-aging benefits.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center">
                    <Image
                        src="/comp1.png"
                        alt="Hyaluronic Acid"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">
                        Hyaluronic Acid
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Adds and locks in hydration for a long-last, fresh look.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src="/comp2.jpg"
                        alt="Matrixyl 3000"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">
                        Matrixyl 3000
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Releases wrinkles, boosts production of elastin, and stimulates skin
                        repair.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src="/comp3.jpg"
                        alt="Argireline"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">
                        Argireline
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Reduces the appearance of fine lines and wrinkles.
                    </p>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
                {[
                    ["Moisturizing", "/icon1.png"],
                    ["All Skin Types", "/icon2.png"],
                    ["Cruelty Free", "/icon3.png"],
                    ["Paraben Free", "/icon4.png"],
                    ["Skincare Actives", "/icon5.png"],
                    ["Water Resistant", "/icon6.png"],
                ].map(([label, icon], idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <Image src={icon} alt={label} width={100} height={100} />
                        <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
