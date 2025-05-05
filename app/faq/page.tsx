"use client";

import { useState } from "react";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

const faqs = [
  {
    question: "Why is my promo code not working?",
    answer:
      "To sign up, head to the onboarding screen, look for the Sign-Up button, and follow the instructions. New subscribers can enjoy getting started for nothing.",
  },
  {
    question: "When will I receive my order?",
    answer:
      "You should check your inbox for the confirmation email and set up your profile.",
  },
  {
    question: "Is this set up on a club or automatic shipment?",
    answer: "Yes, they have started rolling out to early subscribers.",
  },
  {
    question: "What Methods of Payment do you accept?",
    answer: "Please contact support using the form below or call our helpline.",
  },
  {
    question: "Retail Customer Returns?",
    answer: "Please contact support using the form below or call our helpline.",
  },
  {
    question: "Defective Products or Wrong Shades?",
    answer: "Please contact support using the form below or call our helpline.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />

      <div className="bg-red-50 py-12 px-4 rounded-lg mt-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 mb-6">
            <h2 className="text-3xl font-bold text-center">
              How Can We Help You?
            </h2>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[180px]">
            <img
              src="/5.png"
              alt="Phone Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h4 className="font-semibold">General Questions</h4>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[180px]">
            <img
              src="/6.png"
              alt="Clock Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h4 className="font-semibold">Product Questions</h4>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[180px]">
            <img
              src="/7.png"
              alt="Location Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h4 className="font-semibold">Shipping & Returns</h4>
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-12 mt-10">
        <div className="space-y-2 mb-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-sarif font-semibold text-center mb-8">
          Can’t find what you’re looking for?
        </h3>
        <div className="text-center mb-12">
          <button className="bg-red-200 text-black font-bold py-2 px-6 rounded hover:bg-red-300">
            GET IN TOUCH
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
