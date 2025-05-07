"use client";

import { Star } from "lucide-react";

const Pdp3 = () => {
    const ratingData = {
        overall: 4.6,
        reviewsCount: 564,
        quality: 4.7,
        value: 4.6,
        breakdown: [
            { label: "Excellent", percent: 78 },
            { label: "Great", percent: 12 },
            { label: "Average", percent: 4 },
            { label: "Poor", percent: 1 },
            { label: "Bad", percent: 4 },
        ],
        reviews: [
            {
                name: "Jane Berryman",
                time: "2 hours ago",
                rating: 5,
                text: "The quality and coverage is fantastic!",
                verified: true,
            },
            {
                name: "Tammy Muse",
                time: "3 hours ago",
                rating: 3,
                text: "Still not dark enough and a little too much money",
                verified: true,
            },
        ],
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white border rounded-md shadow-sm mt-20">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.round(ratingData.overall)
                                    ? "text-green-600"
                                    : "text-gray-300"
                                }`}
                            fill={
                                i < Math.round(ratingData.overall) ? "currentColor" : "none"
                            }
                        />
                    ))}
                    <span className="font-semibold text-lg">
                        {ratingData.overall} / 5
                    </span>
                    <span className="text-gray-500 text-sm">
                        - {ratingData.reviewsCount} reviews
                    </span>
                </div>
                <span className="text-sm font-medium text-green-600">Trustpilot</span>
            </div>

            <div className="flex space-x-10 mb-6">
                <div>
                    <div className="font-medium mb-1">Quality</div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.round(ratingData.quality)
                                        ? "text-green-600"
                                        : "text-gray-300"
                                    }`}
                                fill={
                                    i < Math.round(ratingData.quality) ? "currentColor" : "none"
                                }
                            />
                        ))}
                        <span className="ml-2 text-sm">{ratingData.quality} / 5</span>
                    </div>
                </div>
                <div>
                    <div className="font-medium mb-1">Value for money</div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.round(ratingData.value)
                                        ? "text-green-600"
                                        : "text-gray-300"
                                    }`}
                                fill={
                                    i < Math.round(ratingData.value) ? "currentColor" : "none"
                                }
                            />
                        ))}
                        <span className="ml-2 text-sm">{ratingData.value} / 5</span>
                    </div>
                </div>
            </div>

            <div className="space-y-2 mb-6">
                {ratingData.breakdown.map((item) => (
                    <div key={item.label} className="flex items-center space-x-2">
                        <div className="w-24 text-sm text-gray-700">{item.label}</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-gray-700 rounded"
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                        <div className="w-10 text-sm text-right">{item.percent}%</div>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                {ratingData.reviews.map((review, idx) => (
                    <div key={idx} className="border-t pt-4">
                        <div className="flex items-center space-x-2 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? "text-green-600" : "text-gray-300"
                                        }`}
                                    fill={i < review.rating ? "currentColor" : "none"}
                                />
                            ))}
                            <span className="text-sm text-gray-600">
                                {review.name}, {review.time}
                            </span>
                        </div>
                        <p className="text-sm text-gray-800 mb-1">{review.text}</p>
                        {review.verified && (
                            <span className="text-xs text-gray-400">
                                ✔ Verified, collected by jeromealexander.com
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pdp3;
