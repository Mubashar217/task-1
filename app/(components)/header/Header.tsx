import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full">
      <div className="hidden md:block relative w-full h-[800px] ">
        <Image
          src="/frontimg1.png"
          alt="imge"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-40">
          <div className="text-left max-w-full">
            <h1 className="text-6xl font-serif italic text-[#3d1d1d] mb-4">
              Flawless Coverage for All
            </h1>
            <p className="text-[#3d1d1d] text-md mb-6">
              The AirBrush family helps create the smooth, flawless finish your
              skin deserves.
            </p>
            <button className="bg-[#4a1f1f] text-white px-8 rounded py-4 text-sm font-bold">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden  bg-white text-center">
        <div className="w-full relative h-[400px] py-8">
          <Image
            src="/mobile1.jpg"
            alt="AirBrush Products"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-3xl font-serif  text-black mb-2">
            Flawless Coverage for All
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            The AirBrush family helps create the smooth, flawless finish your
            skin deserves.
          </p>
          <button className="bg-red-200 font-bold text-black px-30 py-3 rounded-md text-sm mt-6">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};
