'use client'

import React from 'react';

const Aboutcomp = () => {
    return (
        <div>
            <div className="w-full bg-[#fff5f5] py-12 px-4 text-center">

                <div className="max-w-4xl mx-auto">
                    <p className="text-sm text-gray-600 text-left mb-4">
                        <a href="/" className="hover:underline">Home</a> &gt; <span className="text-black">About Jerome</span>
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        Meet the Man Behind the Makeup
                    </h2>
                    <p className="text-sm md:text-base text-gray-700">
                        Jerome Alexander, the Man Behind the Makeup, has been educating women on how to be their own makeup artists for over 50 years.
                        He has dedicated his career to teaching women how to look their best and enhance their beauty.
                    </p>
                </div>

            </div>
            <div className="max-w-3xl mx-auto mt-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full rounded-md shadow-lg"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="The Man Behind the Makeup"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                    Watch this documentary short film to learn more about Jerome Alexander’s amazing career and influence on the beauty industry!
                </p>
            </div>
        </div>
    );
};

export default Aboutcomp;
