'use client';

import { useState } from 'react';
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

const faqs = [
  {
    question: 'How do I sign up for MyWebsite Product?',
    answer: 'To sign up, head to the onboarding screen, look for the Sign-Up button, and follow the instructions. New subscribers can enjoy getting started for nothing.',
  },
  {
    question: 'What should I do next?',
    answer: 'You should check your inbox for the confirmation email and set up your profile.',
  },
  {
    question: 'Have Methods of Payment devices arrived?',
    answer: 'Yes, they have started rolling out to early subscribers.',
  },
  {
    question: 'My Methods bundle order is here but my Wi-Fi won’t connect?',
    answer: 'Please contact support using the form below or call our helpline.',
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

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Page</h1>

        <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-6">Check out a few of our most commonly asked questions.</p>

        <div className="space-y-2 mb-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
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

        <h3 className="text-xl font-semibold text-center mb-2">Still Need Help?</h3>
        <p className="text-center text-gray-600 mb-6">Fill out the form below or call our support team.</p>

        <form className="space-y-4">
          <div className="flex gap-4 flex-col sm:flex-row">
            <input type="text" placeholder="First Name" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Last Name" className="w-full border rounded px-3 py-2" />
          </div>
          <input type="email" placeholder="Email address" className="w-full border rounded px-3 py-2" />
          <input type="tel" placeholder="Phone Number" className="w-full border rounded px-3 py-2" />
          <select className="w-full border rounded px-3 py-2">
            <option>How Can We Help?</option>
            <option>Billing</option>
            <option>Technical Support</option>
            <option>Other</option>
          </select>
          <input type="text" placeholder="Order Number (optional)" className="w-full border rounded px-3 py-2" />
          <textarea placeholder="Message" rows={4} className="w-full border rounded px-3 py-2" />
          <button type="submit" className="bg-red-200 text-black font-bold py-2 px-6 rounded hover:bg-red-300">SUBMIT</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
