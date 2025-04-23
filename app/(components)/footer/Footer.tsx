"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../button/Button";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="border-t mt-16 text-sm text-black">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="hidden md:grid grid-cols-4 gap-8">
         
          <div>
            <h3 className="font-semibold mb-2">SHOP</h3>
            <ul className="space-y-1">
              <li><a href="/">AirBrush</a></li>
              <li><a href="/">Stackables</a></li>
              <li><a href="/">Face</a></li>
              <li><a href="/">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">RESOURCES</h3>
            <ul className="space-y-1">
              <li><a href="/">About Jerome</a></li>
              <li><a href="/">Find Your Shade</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Jerome’s Secrets</a></li>
              <li><a href="/">Our Blog</a></li>
              <li><a href="/">Retail</a></li>
              <li><a href="/">My Account</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">LEGAL</h3>
            <ul className="space-y-1">
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">California Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">FILL YOUR INBOX WITH BEAUTY</h3>
            <p className="text-xs mb-2">
              Receive 15% off your first order when you join our mailing list. Plus, you’ll be the first to find out about new products and sale events!
            </p>
            <Button/>
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden space-y-6">
          {["SHOP", "RESOURCES", "LEGAL"].map((section) => (
            <div key={section}>
              <button
                className="flex justify-between items-center w-full font-semibold"
                onClick={() => toggleSection(section)}
              >
                {section}
                <ChevronDown className={`h-4 w-4 transform transition ${openSection === section ? "rotate-180" : ""}`} />
              </button>
              {openSection === section && (
                <ul className="mt-2 space-y-1 text-sm">
                  {section === "SHOP" && (
                    <>
                      <li><a href="/">AirBrush</a></li>
                      <li><a href="/">Stackables</a></li>
                      <li><a href="/">Face</a></li>
                      <li><a href="/">Best Sellers</a></li>
                    </>
                  )}
                  {section === "RESOURCES" && (
                    <>
                      <li><a href="/">About Jerome</a></li>
                      <li><a href="/">Find Your Shade</a></li>
                      <li><a href="/">FAQ</a></li>
                      <li><a href="/">Jerome’s Secrets</a></li>
                      <li><a href="/">Our Blog</a></li>
                      <li><a href="/">Retail</a></li>
                      <li><a href="/">My Account</a></li>
                      <li><a href="/">Contact Us</a></li>
                    </>
                  )}
                  {section === "LEGAL" && (
                    <>
                      <li><a href="/">Privacy Policy</a></li>
                      <li><a href="/">California Privacy Policy</a></li>
                      <li><a href="/">Terms & Conditions</a></li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}

          <div className="pt-4">
            <h3 className="font-semibold text-sm text-center">FILL YOUR INBOX WITH BEAUTY</h3>
            <p className="text-xs mt-1 mb-3 text-center">
              Receive 15% off your first order when you join our mailing list. Plus, you’ll be the first to find out about new products and sale events!
            </p>
            <div className="flex  border-black px-2 py-1 text-xs">
              <input type="email" placeholder="Enter Email Address" className="w-full outline-none" />
              <Button/>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-4 text-xl">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-youtube" />
          <i className="fab fa-pinterest-p" />
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          © 2022. Jerome Alexander. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
