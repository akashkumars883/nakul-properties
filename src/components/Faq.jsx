'use client';

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import React, { useState } from "react";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Are the plots HUDA and HSVP approved?',
            answer: 'Yes, all the sector plots listed under our HUDA category are 100% HSVP approved with clear legal titles and freehold status, making them safe for immediate registry and construction.',
        },
        {
            question: 'Can I get a bank loan for purchasing residential plots in Faridabad?',
            answer: 'Absolutely. Since our listings are fully verified and approved by authority plans, you can easily obtain bank loans from leading public and private banks like SBI, HDFC, ICICI, and LIC Housing Finance.',
        },
        {
            question: 'Do you charge brokerage on builder floor deals?',
            answer: 'We offer special direct developer deals with 0% brokerage on select premium builder floors in established sectors like Sector 14, 15, and 21. For other listings, standard nominal service fees apply.',
        },
        {
            question: 'What documents are required for property registry in Haryana?',
            answer: 'For a hassle-free registry, you will need identity proofs (PAN card, Aadhaar card), registry papers of the seller, NOC from town planning (if applicable), and stamp duty papers. Our team handles the entire documentation process for you.',
        },
    ];

    return (
        <section id="faq" className="scroll-mt-32" aria-labelledby="faq-heading">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">Got Questions?</span>
                <h2 id="faq-heading" className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-neutral-600 text-base leading-relaxed">Quick answers to common questions about properties, pricing, registry, and bank loans in Faridabad.</p>
            </div>

            {/* Accordian List */}
            <div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden bg-white transition-all">
                        <button type="button" onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-black hover:bg-neutral-50 transition-colors focus:outline-none" aria-expanded={isOpen}>
                            <div className="flex items-center gap-3 pr-4">
                                <HelpCircle className="w-4 h-4 text-neutral-400 shrink-0" />
                                <span className="text-sm sm:text-base">{faq.question}</span>
                            </div>
                            {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-black shrink-0" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-black shrink-0" />
                            )}
                        </button>

                        {/* Collapsible Answer Body */}
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-neutral-100' : 'max-h-0'}`}>
                            <p className="p-5 text-neutral-600 text-sm leading-relaxed bg-neutral-50">{faq.answer}</p>
                        </div>
                    </div>
                )
            })}</div>
        </section>
    )
}