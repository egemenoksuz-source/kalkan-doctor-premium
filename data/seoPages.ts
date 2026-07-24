export type SeoPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  contentSections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  services: string[];
  areas: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "doctor-in-kalkan",
    metaTitle: "Doctor in Kalkan | 24/7 English-Speaking Doctor",
    metaDescription:
      "Need a doctor in Kalkan? Contact our English-speaking medical team for private hotel, villa and home visits in Kalkan. Call or WhatsApp 24/7.",
    eyebrow: "24/7 Private Doctor Service in Kalkan",
    heading: "Doctor in Kalkan for Hotel, Villa & Home Visits",
    intro:
      "Need medical help while staying in Kalkan? Our English-speaking medical team supports tourists, residents and families with private doctor visits at hotels, villas, apartments, holiday homes and private residences throughout Kalkan.",
    contentSections: [
      {
        title: "Private medical assistance where you are staying",
        paragraphs: [
          "Feeling unwell while travelling can be stressful, especially when you are unfamiliar with the local healthcare system. Kalkan Doctor provides direct access to English-speaking medical assistance without requiring you to leave your accommodation when a visit at your location is suitable.",
          "Contact the team by telephone or WhatsApp and share the patient’s age, main symptoms, accommodation name and exact location. The information is reviewed so that the most appropriate next step can be discussed.",
        ],
        bullets: [
          "Doctor visits to hotels and boutique accommodation",
          "Private villa and holiday-home visits",
          "Home visits for residents and international families",
          "Clear communication in English and Turkish",
        ],
      },
      {
        title: "Medical care for common holiday health problems",
        paragraphs: [
          "Visitors commonly request medical assessment for stomach problems, dehydration, fever, respiratory symptoms, ear complaints, minor injuries and other unexpected illnesses. Every patient is assessed individually; treatment or further referral depends on the clinical evaluation.",
          "For severe breathing difficulty, unconsciousness, stroke symptoms, major trauma or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
        ],
      },
      {
        title: "Doctor coverage across Kalkan",
        paragraphs: [
          "Private medical visits may be arranged in Kalkan Centre, Kalamar, Kışla, Ortaalan and nearby villa districts including İslamlar, Üzümlü and Sarıbelen. Availability and estimated arrival information are confirmed after the patient’s location and needs are received.",
        ],
      },
    ],
    services: [
      "Private doctor consultations",
      "Hotel and villa visits",
      "Home healthcare",
      "Urgent medical assessment",
      "IV therapy when medically appropriate",
      "Blood tests and health checks",
      "Prescription support",
      "Medical transport coordination",
    ],
    areas: [
      "Kalkan Centre",
      "Kalamar",
      "Kışla",
      "İslamlar",
      "Üzümlü",
      "Sarıbelen",
    ],
    faq: [
      {
        question: "Can a doctor visit my hotel or villa in Kalkan?",
        answer:
          "Yes. Private medical visits may be arranged at hotels, villas, apartments and holiday homes throughout Kalkan.",
      },
      {
        question: "Does the medical team speak English?",
        answer:
          "Yes. English communication is available for international patients, tourists and residents.",
      },
      {
        question: "How can I request a doctor in Kalkan?",
        answer:
          "Call or send a WhatsApp message with the patient’s age, symptoms and exact location.",
      },
      {
        question: "Is a doctor available in Kalkan at night?",
        answer:
          "You can contact the medical team day or night. Current availability and the appropriate next step are confirmed after the patient’s information is reviewed.",
      },
      {
        question: "Can tourists receive help for food poisoning or dehydration?",
        answer:
          "Yes. Tourists may request a medical assessment for stomach problems, vomiting, diarrhoea or possible dehydration. Treatment depends on the doctor’s individual clinical assessment.",
      },
      {
        question: "Which parts of Kalkan do you cover?",
        answer:
          "Coverage includes Kalkan Centre, Kalamar, Kışla, İslamlar, Üzümlü, Sarıbelen and nearby locations, subject to current availability.",
      },
    ],
  },
  {
    slug: "doctor-in-kas",
    metaTitle: "Doctor in Kaş | 24/7 English-Speaking Doctor Visits",
    metaDescription:
      "Need a doctor in Kaş? Request English-speaking private medical assistance at your hotel, villa, apartment or home. Call or WhatsApp 24/7.",
    eyebrow: "24/7 Private Medical Assistance in Kaş",
    heading: "Doctor in Kaş for Hotel, Villa & Home Visits",
    intro:
      "English-speaking private medical support for tourists, residents and families throughout Kaş. Contact the team to discuss a doctor visit at your hotel, villa, apartment, holiday accommodation or home.",
    contentSections: [
      {
        title: "English-speaking medical support in Kaş",
        paragraphs: [
          "When you become unwell during your holiday, clear communication and fast access to appropriate medical advice are important. Our service helps international visitors in Kaş explain their symptoms in English and understand the recommended next steps.",
          "A private medical visit may be arranged at your accommodation when clinically suitable. Send the patient’s details, symptoms, hotel or villa name and exact WhatsApp location to begin.",
        ],
        bullets: [
          "Hotel-room doctor consultations",
          "Private villa and apartment visits",
          "Medical support for tourists and residents",
          "English and Turkish communication",
        ],
      },
      {
        title: "Common reasons to request a doctor in Kaş",
        paragraphs: [
          "Patients may contact the team for sudden illness, food poisoning symptoms, dehydration concerns, fever, infections, ear complaints, minor injuries and general medical assessment. Recommendations are based on the patient’s symptoms and individual clinical examination.",
          "If the condition appears life-threatening, contact 112 immediately rather than waiting for a private visit.",
        ],
      },
      {
        title: "Medical visits across Kaş",
        paragraphs: [
          "Service coverage includes Kaş Centre, Çukurbağ Peninsula, Gökseki, Bayındır, Büyük Çakıl and nearby accommodation areas. The team confirms availability after receiving the exact location.",
        ],
      },
    ],
    services: [
      "Doctor visits in Kaş",
      "Hotel and accommodation visits",
      "Villa and home healthcare",
      "Urgent medical consultations",
      "Food poisoning assessment",
      "Dehydration care",
      "Blood test support",
      "Prescription assistance",
    ],
    areas: [
      "Kaş Centre",
      "Çukurbağ Peninsula",
      "Gökseki",
      "Bayındır",
      "Büyük Çakıl",
      "Nearby Kaş locations",
    ],
    faq: [
      {
        question: "Do you provide doctor visits in Kaş?",
        answer:
          "Yes. Medical visits may be arranged at hotels, villas, apartments and homes throughout Kaş.",
      },
      {
        question: "Can tourists request medical assistance?",
        answer:
          "Yes. The service supports tourists, international residents, families and local patients.",
      },
      {
        question: "How do I share my location?",
        answer:
          "Send your exact WhatsApp location together with the patient’s information and symptoms.",
      },
      {
        question: "Can a doctor come to my hotel room in Kaş?",
        answer:
          "Yes. When appropriate and available, a private doctor visit may be arranged at your hotel, villa, apartment or holiday accommodation.",
      },
      {
        question: "Is English communication available?",
        answer:
          "Yes. International patients can explain their symptoms and receive medical information in English.",
      },
      {
        question: "What should I do in a serious emergency?",
        answer:
          "For unconsciousness, severe breathing difficulty, stroke symptoms, major trauma or another life-threatening condition, call Türkiye’s emergency number 112 immediately.",
      },
    ],
  },
  {
    slug: "hotel-doctor-kalkan",
    metaTitle: "Hotel Doctor Kalkan | Private Doctor Visit to Your Hotel",
    metaDescription:
      "Request an English-speaking hotel doctor in Kalkan. Private medical visits to hotels, resorts, villas and holiday accommodation.",
    eyebrow: "Hotel & Holiday Medical Care",
    heading: "Hotel Doctor in Kalkan",
    intro:
      "Receive private medical care without leaving your accommodation. Doctor visits may be arranged directly at hotels, resorts, villas, apartments and holiday homes in Kalkan.",
    services: [
      "Private examination in your room",
      "English-speaking consultation",
      "Food poisoning assessment",
      "Ear infection care",
      "Dehydration support",
      "Fever and illness assessment",
      "Prescription support",
      "Medical follow-up",
    ],
    areas: [
      "Kalkan Hotels",
      "Kalamar Hotels",
      "Private Villas",
      "Holiday Apartments",
      "Boutique Hotels",
      "Nearby Resorts",
    ],
    faq: [
      {
        question: "Can the doctor examine me in my hotel room?",
        answer:
          "Yes. Private medical consultations may be provided directly in your hotel room or accommodation.",
      },
      {
        question: "What information should I send?",
        answer:
          "Send the hotel name, room number, patient’s age, symptoms and a contact telephone number.",
      },
      {
        question: "Is the service available at night?",
        answer:
          "You can contact the medical team day or night. Availability is confirmed after receiving your information.",
      },
    ],
  },
  {
    slug: "home-visit-doctor-kalkan",
    metaTitle: "Home Visit Doctor Kalkan | Villa & Home Medical Care",
    metaDescription:
      "Private home visit doctor service in Kalkan for villas, apartments and residences. English-speaking medical assistance available.",
    eyebrow: "Medical Care at Your Location",
    heading: "Home Visit Doctor in Kalkan",
    intro:
      "Private medical support in the comfort of your villa, apartment or home. The service is suitable for tourists, residents, families and patients who prefer not to travel.",
    services: [
      "Home medical examination",
      "Villa doctor visits",
      "Apartment consultations",
      "Routine health assessment",
      "Family medical care",
      "Elderly patient support",
      "Treatment follow-up",
      "Laboratory coordination",
    ],
    areas: [
      "Kalkan",
      "Kalamar",
      "Kışla",
      "İslamlar",
      "Üzümlü",
      "Surrounding areas",
    ],
    faq: [
      {
        question: "Can a doctor visit my private villa?",
        answer:
          "Yes. Doctor visits may be arranged at private villas, apartments and homes.",
      },
      {
        question: "Is home care available for residents?",
        answer:
          "Yes. Home consultations may be requested by residents, international families and long-term visitors.",
      },
      {
        question: "How is the visit arranged?",
        answer:
          "Contact the medical team and provide the patient’s details, symptoms and exact location.",
      },
    ],
  },
  {
    slug: "emergency-doctor-kalkan",
    metaTitle: "Emergency Doctor Kalkan | Urgent Medical Assistance",
    metaDescription:
      "Urgent English-speaking medical assistance in Kalkan for suitable non-life-threatening conditions. Hotel, villa and home visits.",
    eyebrow: "Urgent Medical Assistance",
    heading: "Emergency Doctor in Kalkan",
    intro:
      "Contact the medical team for urgent assessment of suitable non-life-threatening health concerns. After reviewing the symptoms, the team will advise whether a doctor visit or emergency service is appropriate.",
    services: [
      "Urgent medical assessment",
      "Sudden illness support",
      "Food poisoning care",
      "Dehydration assessment",
      "Minor injury evaluation",
      "Fever and infection assessment",
      "Hotel and villa visits",
      "Hospital referral guidance",
    ],
    areas: [
      "Kalkan",
      "Kaş",
      "Patara",
      "Kaputaş",
      "Nearby hotels",
      "Surrounding locations",
    ],
    faq: [
      {
        question: "What should I do in a life-threatening emergency?",
        answer:
          "For severe chest pain, unconsciousness, major trauma, stroke symptoms or serious breathing difficulty, call Türkiye’s emergency number 112 immediately.",
      },
      {
        question: "Can the doctor visit my accommodation?",
        answer:
          "A doctor visit may be arranged at hotels, villas, apartments and homes when considered suitable.",
      },
      {
        question: "What symptoms should I send?",
        answer:
          "Describe the main symptoms, when they started, the patient’s age and any important medical conditions.",
      },
    ],
  },
  {
    slug: "english-speaking-doctor-kalkan",
    metaTitle: "English-Speaking Doctor Kalkan | Private Medical Service",
    metaDescription:
      "English-speaking medical care in Kalkan for tourists, expats and international residents. Hotel, villa and home visits available.",
    eyebrow: "Medical Care Without a Language Barrier",
    heading: "English-Speaking Doctor in Kalkan",
    intro:
      "Clear communication helps patients explain their symptoms, understand the medical assessment and follow treatment recommendations confidently.",
    services: [
      "Medical consultations in English",
      "Clear explanation of findings",
      "Hotel doctor visits",
      "Villa and home consultations",
      "Tourist medical support",
      "Family healthcare",
      "Prescription assistance",
      "Medical follow-up",
    ],
    areas: [
      "Kalkan",
      "Kaş",
      "Patara",
      "Kaputaş",
      "Kalamar",
      "Nearby locations",
    ],
    faq: [
      {
        question: "Will the consultation be conducted in English?",
        answer:
          "Yes. English communication is available throughout the medical consultation and treatment explanation.",
      },
      {
        question: "Is the service suitable for tourists?",
        answer:
          "Yes. The service is designed to support tourists, international residents and families.",
      },
      {
        question: "Can I contact the team through WhatsApp?",
        answer:
          "Yes. You can send the patient’s details, symptoms and location directly through WhatsApp.",
      },
    ],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}