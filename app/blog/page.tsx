"use client";

import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function Blog() {
  const posts = Array.from({ length: 9 }).map((_, idx) => ({
    id: idx,
    title: `Blog Title Lorem ipsum dolor sit amet consectetur`,
    date: "1 May 2025",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus et elit at facilisis...",
  }));

  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />

      <div className="px-4 py-8 max-w-7xl mx-auto mt-15">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-200 aspect-video w-full rounded-md" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Blog Title Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-sm text-gray-500 mb-2">1 May 2025</p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus et elit at facilisis. Nam convallis ultricies erat, non
              vulputate nibh aliquam sed.
            </p>
            <button className="self-start px-8 py-3 bg-red-200 text-black font-bold rounded-sm text-sm">
              READ MORE
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <div className="bg-gray-200 aspect-square rounded mb-4" />
              <h3 className="text-sm font-semibold">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.date}</p>
              <p className="text-sm text-gray-700 mt-1 mb-3">{post.excerpt}</p>
              <button className="text-sm cursor-pointer hover:underline font-bold text-black text-start">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
