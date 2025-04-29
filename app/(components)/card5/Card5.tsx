"use client";

export default function CardWithImage() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[400px] w-full mt-20 overflow-hidden shadow-md">
      <div className="w-full md:w-1/5 bg-white p-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-bold">Card Title</h2>
          <p className="text-sm text-gray-600">Some description here.</p>
        </div>
      </div>

      <div className="w-full md:w-4/5 flex items-center justify-center">
        <img
          src="/bigpic1.jpg"
          alt="Sample"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
