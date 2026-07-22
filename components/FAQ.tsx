"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

const questions = [
  {
    question: "Is medical assistance available 24 hours a day?",
    answer:
      "You can contact the medical team day or night. Visit availability and estimated arrival time are confirmed after receiving the patient’s condition and location.",
  },
  {
    question: "Does the medical team speak English?",
    answer:
      "Yes. English communication is available so international patients can explain their symptoms and understand the recommended medical care clearly.",
  },
  {
    question: "Can a doctor visit my hotel or villa?",
    answer:
      "Yes. Doctor visits may be arranged at hotels, villas, apartments, holiday homes and private residences throughout the service area.",
  },
  {
    question: "Which locations do you cover?",
    answer:
      "The main service areas are Kalkan, Kaş, Patara and Kaputaş. Visits may also be arranged in Kalamar, Kışla, İslamlar, Üzümlü, Gelemiş, Yeşilköy, Sarıbelen, Bezirgan and nearby locations.",
  },
  {
    question: "How do I request a doctor visit?",
    answer:
      "Call or send a WhatsApp message with the patient’s age, symptoms, accommodation name and exact location. The medical team will review the request and confirm the next step.",
  },
  {
    question: "Can you help with food poisoning or dehydration?",
    answer:
      "A doctor can assess symptoms such as nausea, vomiting, diarrhoea and dehydration, then recommend suitable treatment based on the medical examination.",
  },
  {
    question: "Is IV therapy available?",
    answer:
      "IV hydration and supportive treatment may be provided when the doctor determines that it is medically appropriate for the patient.",
  },
  {
    question: "Do you provide care for children and families?",
    answer:
      "Medical assistance is available for adults, children, families, elderly patients, tourists and residents. The patient’s age should be shared when requesting a visit.",
  },
  {
    question: "Can you arrange blood tests?",
    answer:
      "Blood tests and laboratory support may be arranged depending on the patient’s clinical needs and location.",
  },
  {
    question: "How quickly can the doctor arrive?",
    answer:
      "Arrival time depends on the patient’s location, current demand and the medical team’s availability. An estimated time will be provided after reviewing the request.",
  },
  {
    question: "What should I do in a life-threatening emergency?",
    answer:
      "For severe breathing difficulty, unconsciousness, major trauma, stroke symptoms, severe chest pain or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FFF6F3] py-20 sm:py-28">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-40">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E52300]">
                06 / Frequently asked
              </p>

              <h2 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">
                Clear answers
                <span className="mt-2 block font-light italic text-[#FF2800]">
                  before you call.
                </span>
              </h2>

              <p className="mt-7 max-w-md font-medium leading-8 text-slate-600">
                Find practical information about medical visits, service
                locations, communication and urgent assistance.
              </p>

              <div className="mt-9 border border-black/10 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
                <span className="grid h-12 w-12 place-items-center bg-[#FF2800] text-white">
                  <HelpCircle size={23} />
                </span>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  Still have a question?
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                  Contact the medical team directly and explain what you need.
                </p>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#FF2800] pb-2 text-sm font-black text-[#E52300]"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 bg-white">
            {questions.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <article
                  key={item.question}
                  className="border-b border-black/10 px-5 sm:px-7"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <span className="pt-1 text-xs font-black tracking-wider text-[#FF2800]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-lg font-black leading-7 tracking-[-0.02em] text-slate-950 sm:text-xl">
                        {item.question}
                      </h3>
                    </div>

                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center border-2 transition duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#FF2800] bg-[#FF2800] text-white"
                          : "border-[#FF2800] bg-white text-[#FF2800]"
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pl-10 text-sm font-medium leading-7 text-slate-600 sm:pl-14 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-l-4 border-[#FF2800] bg-white p-7 shadow-[0_15px_40px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E52300]">
              Emergency information
            </p>

            <p className="mt-2 font-bold leading-7 text-slate-800">
              For a life-threatening emergency, call Türkiye’s official
              emergency number 112.
            </p>
          </div>

          <a
            href="tel:112"
            className="inline-flex shrink-0 items-center gap-2 bg-[#FF2800] px-6 py-4 font-black text-white transition hover:bg-[#D62000]"
          >
            <Phone size={18} />
            Call 112
          </a>
        </div>
      </div>
    </section>
  );
}