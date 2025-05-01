"use client";

import Navbar from "../(components)/navbar/Navbar";
import Footer from "../(components)/footer/Footer";

export default function Policy() {
  return (
    <div className="max-w-[1920px] mx-auto bg-white">
      <Navbar />
      {" "}
      <div className="bg-[#fdf6f6] py-8 px-6 md:px-10 ">
        <h1 className="text-center text-2xl md:text-3xl font-medium text-gray-800">
          Privacy Policy
        </h1>
      </div>
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="w-full max-w-3xl rounded-lg  overflow-hidden">
          <div className="bg-white p-6 md:p-10 space-y-6 text-gray-700 text-sm md:text-[15px] leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis diam id mauris varius lobortis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nam
              non sem eu dolor accumsan eleifend. Morbi accumsan consectetur dui
              at ullamcorper. Fusce feugiat pretium eleifend. Nunc mollis
              pretium neque at gravida.
            </p>
            <p>
              Nunc et sem ac massa mattis volutpat in ac justo. In vestibulum
              eget diam lacinia pretium. Nunc aliquam nec arcu non pharetra.
              Vestibulum orci tellus, venenatis at odio a, porta pulvinar massa.
              Nullam vitae elit diam. Vivamus vehicula sem in tortor faucibus,
              quis consequat orci consectetur. Ut condimentum metus vitae
              imperdiet scelerisque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              facilisis diam id mauris varius lobortis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nam
              non sem eu dolor accumsan eleifend. Morbi accumsan consectetur dui
              at ullamcorper.
            </p>
            <p>
              Nunc et sem ac massa mattis volutpat in ac justo. In vestibulum
              eget diam lacinia pretium. Nunc aliquam nec arcu non pharetra.
              Vestibulum orci tellus, venenatis at odio a, porta pulvinar massa.
              Nullam vitae elit diam. Vivamus vehicula sem in tortor faucibus,
              quis consequat orci consectetur.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
