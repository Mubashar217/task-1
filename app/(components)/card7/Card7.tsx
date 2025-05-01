"use client";

import React from "react";

const reviews = [
  {
    name: "Debbie L.",
    time: "4 hours ago",
    title: "I always have a great experience with...",
    text: "I always have a great experience with... Alexander delivery and service.",
  },
  {
    name: "Amy Cohen",
    time: "6 hours ago",
    title: "review",
    text: "I've been a customer for several years...",
  },
  {
    name: "Cassandra",
    time: "11 hours ago",
    title: "I love this makeup",
    text: "I love this makeup. Just enjoy it so much...",
  },
  {
    name: "Elena Gilbert",
    time: "15 hours ago",
    title: "always happy",
    text: "always happy, you never disappoint.",
  },
  {
    name: "Yessy Gonzalez",
    time: "3 hours ago",
    title: "good product",
    text: "muy grandioso y fantástico",
  },

  {
    name: "Yessy Gonzalez",
    time: "3 hours ago",
    title: "good product",
    text: "muy grandioso y fantástico",
  },

  {
    name: "Yessy Gonzalez",
    time: "3 hours ago",
    title: "good product",
    text: "muy grandioso y fantástico",
  },
];

const Card7 = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-4 py-6 mt-14">
      <div className="flex gap-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[340px] max-w-md bg-white rounded-xl shadow-md p-4"
          >
            <div className="flex items-center mb-2">
              <span className="text-green-600 font-bold mr-2">★★★★★</span>
              <span className="text-xs text-gray-500">Verified</span>
            </div>
            <h4 className="font-semibold text-sm mb-1">{review.title}</h4>
            <p className="text-sm text-gray-600 line-clamp-3">{review.text}</p>
            <div className="text-xs text-gray-500 mt-3">
              {review.name}, {review.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card7;
