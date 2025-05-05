"use client";

import { useState } from "react";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

const faqs = [
  {
    question: "How do I sign up for MyWebsite Product?",
    answer:
      "To sign up, head to the onboarding screen, look for the Sign-Up button, and follow the instructions. New subscribers can enjoy getting started for nothing.",
  },
  {
    question: "What should I do next?",
    answer:
      "You should check your inbox for the confirmation email and set up your profile.",
  },
  {
    question: "Have Methods of Payment devices arrived?",
    answer: "Yes, they have started rolling out to early subscribers.",
  },
  {
    question: "My Methods bundle order is here but my Wi-Fi won’t connect?",
    answer: "Please contact support using the form below or call our helpline.",
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />

      <div className="bg-red-50 py-12 px-4 rounded-lg mt-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white p-10 rounded shadow min-h-[160px]">
            <img
              src="/1.png"
              alt="Email Icon"
              className="mx-auto mb-2 w-8 h-6"
            />
            <h4 className="font-semibold">Questions & Help</h4>
            <a
              href="mailto:support@jeromealexander.com"
              className="text-black underline text-sm"
            >
              support@jeromealexander.com
            </a>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[160px]">
            <img
              src="/2.png"
              alt="Phone Icon"
              className="mx-auto mb-2 w-8 h-12"
            />
            <h4 className="font-semibold">Customer Service</h4>
            <a href="tel:18888686304" className="text-black underline text-sm">
              1.888.886.6304
            </a>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[160px]">
            <img
              src="/3.png"
              alt="Clock Icon"
              className="mx-auto mb-2 w-8 h-8"
            />
            <h4 className="font-semibold">Hours of Operation</h4>
            <p className="text-sm">M-F 10:00 AM - 8:00 PM EST</p>
          </div>

          <div className="text-center bg-white p-10 rounded shadow min-h-[160px]">
            <img
              src="/4.png"
              alt="Location Icon"
              className="mx-auto mb-2 w-8 h-10"
            />
            <h4 className="font-semibold">Mailing Address</h4>
            <p className="text-sm">
              15820 Euclid Avenue
              <br />
              Chino, California 91708
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Check out a few of our most commonly asked questions.
        </p>

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

        <div className="text-center mb-12">
          <button className="bg-red-200 text-black font-bold py-2 px-6 rounded hover:bg-red-300">
            CHECK OTHER FAQS PAGE
          </button>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-2">
          Still Need Help?
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below or call our support team.
        </p>

        <form className="space-y-4">
          <div className="flex gap-4 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded px-3 py-2 border-gray-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded px-3 py-2 border-gray-300"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded px-3 py-2 border-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2 border-gray-300"
          />
          <select className="w-full border rounded px-3 py-2 border-gray-300">
            <option>How Can We Help?</option>
            <option>Billing</option>
            <option>Technical Support</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="Order Number (optional)"
            className="w-full border rounded px-3 py-2 border-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border rounded px-3 py-2 border-gray-300"
          />
          <button
            type="submit"
            className="bg-red-200 text-black font-bold py-2 px-6 rounded hover:bg-red-300"
          >
            SUBMIT
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
