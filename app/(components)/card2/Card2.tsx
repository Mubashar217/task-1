import Image from "next/image";

export default function Card2() {
  return (
    <div className="main max-w-[1920px]   px-4 md:px-2 py-8">
      <div className="mx-auto w-[100%]">

      <div className="text-3xl text-center font-playfair mb-8">
        The AirBrush Family
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3mx-auto gap-4 ">
        <div className="bg-[#f3e4e3] rounded-lg w-full    justify-between h-[400px] overflow-hidden">
          <div className="relative w-full h-[336px] justify-center items-center p-4">
            <Image src="/card1.jpg" alt="AirBrush" fill />
          </div>
          <button className="w-full text-center py-4 text-sm  bg-[#E6D1CE] hover:underline cursor-pointer">
            Shop AirBrush
          </button>
        </div>

        <div className="bg-[#f3e4e3] rounded-lg w-full justify-between h-[400px] overflow-hidden">
        <div className="relative w-full h-[336px] justify-center items-center p-4">
          <Image src="/card2.jpg" alt="AirTint" fill className="object-cover w-[443px] h-[375px]" />
          </div>
          <button className="w-full text-center py-4 text-sm  bg-[#FFF1E8] hover:underline cursor-pointer">
            Shop AirTint
          </button>
        </div>

        <div className="bg-[#f3e4e3] rounded-lg w-full    justify-between h-[400px] overflow-hidden">
        <div className="relative w-full h-[336px] justify-center items-center p-4">
            <Image src="/card3.png" alt="AirGlow" fill />
          </div>
          <button className="w-full text-center py-4 text-sm  bg-[#DFCEBE] hover:underline cursor-pointer">
            Shop AirGlow
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
