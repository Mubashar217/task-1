"use client";

export default function Card5() {
  return (
    <div className="flex flex-col md:flex-row w-full mt-20 overflow-hidden rounded-2xl shadow-lg">
    
      <div className="w-full md:w-1/5 bg-white dark:bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Card Title
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Some description here.
          </p>
        </div>
      </div>

 
      <div className="relative w-full md:w-4/5 aspect-[16/9] md:aspect-auto md:h-[400px]">
        <img
          src="/bigpic1.jpg"
          alt="Sample"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
