'use client';

import { Quote, Star, StarHalf } from "lucide-react";
import React from "react";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: 'Bhavesh',
            role: 'Property Buyer',
            rating: 5,
            comment: 'The NAKUL PROPERTIES team handled my paperwork and documentation of my property registration smoothly',
        },
        {
            id: 2,
            name: 'Dinesh',
            role: 'Property Seller',
            rating: 4.5,
            comment: 'I contacted the agent and obtained the services for property selling. I wanted to sale my property which is a 3 BHK flat. After contacting many real estate agents, only this agent has helped me in getting the right amount for my property. I got many inquiries and responded to them. These responses got converted into profitable deals quickly without much hassle.',
        },
        {
            id: 3,
            name: 'Aakash',
            role: 'Property Buyer',
            rating: 4.5,
            comment: 'This real estate agent has been a constant support for me when I was looking for a property to purchase in the outskirts. I wanted to have a property according to my requirements and as per my budget. This real estate agent has helped me a lot in obtaining the apt property for myself. Thank You!',
        },
        {
            id: 4,
            name: 'Raju',
            role: 'Property Buyer',
            rating: 5,
            comment: 'Getting in contact with this real estate agent is certainly one of the best ways to get in touch with everything in the real estate world. This real estate agent have listened to my requirements, analyzed my budget, and accordingly suggested the best properties to buy. All thanks to this agent that I ended up with the best deal.',
        },
    ];

    return (
        <section id="testimonials" className="scroll-mt-32" aria-labelledby="testimonials-heading">
            {/* Section Heading */}
            <div className="text-center mb-10 sm:mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">Client Feedback</span>
                <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight">What Our Clients Say About Us</h2>
                <p className="text-neutral-600 text-base leading-relaxed">Hear from satisfied homeowners, plot buyers, and corporate commercial investors in Faridabad.</p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((rev) => (
                    <article key={rev.id} className="bg-white border border-neutral-200 rounded-xl p-6 relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                        {/* Quote Icon Background */}
                        <div className="absolute top-6 right-6 text-neutral-100">
                            <Quote className="w-12 h-12" />
                        </div>

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                {/* Stars - Yellow Color and proper half star rendering */}
                                <div className="flex items-center gap-0.5 mb-4">
                                    {[...Array(Math.floor(rev.rating))].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                    {rev.rating % 1 !== 0 && (
                                        <StarHalf className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    )}
                                </div>

                                {/* Comment */}
                                <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                                    "{rev.comment}"
                                </p>
                            </div>

                            {/* Author profile info */}
                            <div className="border-t border-neutral-100 pt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-neutral-100 text-black font-bold flex items-center justify-center text-sm border border-neutral-200">
                                    {rev.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-black">{rev.name}</h3>
                                    <p className="text-xs text-neutral-400 font-medium">{rev.role}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}