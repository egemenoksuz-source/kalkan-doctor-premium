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
  {
    slug: "food-poisoning-doctor-kalkan",
    metaTitle:
      "Food Poisoning Doctor Kalkan | Hotel & Villa Medical Visit",
    metaDescription:
      "Food poisoning symptoms in Kalkan? Contact our English-speaking medical team for assessment at your hotel, villa or home. Call or WhatsApp 24/7.",
    eyebrow: "Medical Help for Holiday Stomach Problems",
    heading: "Food Poisoning Doctor in Kalkan",
    intro:
      "Vomiting, diarrhoea, stomach pain and dehydration concerns can quickly disrupt a holiday. Contact our English-speaking medical team to discuss an appropriate assessment at your hotel, villa, apartment or home in Kalkan.",
    contentSections: [
      {
        title: "Medical assessment at your accommodation",
        paragraphs: [
          "Food poisoning and gastroenteritis symptoms may have different causes and levels of severity. A medical assessment can help review the patient’s symptoms, hydration status, medical history and whether further treatment or referral is appropriate.",
          "Send the patient’s age, main symptoms, when they started, relevant medical conditions and exact location through WhatsApp. The team will discuss current availability and the most suitable next step.",
        ],
        bullets: [
          "Hotel-room medical assessment",
          "Private villa and apartment visits",
          "Hydration status evaluation",
          "English and Turkish communication",
        ],
      },
      {
        title: "When food poisoning symptoms need urgent help",
        paragraphs: [
          "Seek urgent medical advice when symptoms are severe, persistent or accompanied by signs such as inability to keep fluids down, significant weakness, blood in vomit or stool, severe abdominal pain, confusion or reduced urination.",
          "For unconsciousness, severe breathing difficulty, collapse or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
        ],
      },
      {
        title: "Coverage throughout Kalkan and nearby areas",
        paragraphs: [
          "Medical visits may be arranged in Kalkan Centre, Kalamar, Kışla, Ortaalan, İslamlar, Üzümlü, Sarıbelen and nearby accommodation areas. Availability is confirmed after receiving the patient’s exact location.",
        ],
      },
    ],
    services: [
      "Food poisoning symptom assessment",
      "Vomiting and diarrhoea assessment",
      "Dehydration evaluation",
      "Hotel and villa doctor visits",
      "Medical guidance in English",
      "Treatment planning when appropriate",
      "Prescription support when indicated",
      "Hospital referral guidance",
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
        question:
          "Can a doctor visit my hotel for food poisoning in Kalkan?",
        answer:
          "Yes. When suitable and available, a private medical visit may be arranged at your hotel, villa, apartment or holiday accommodation.",
      },
      {
        question: "Which symptoms should I send through WhatsApp?",
        answer:
          "Send the patient’s age, symptoms, when they started, whether fluids can be kept down, any important medical conditions and the exact location.",
      },
      {
        question: "Can food poisoning cause dehydration?",
        answer:
          "Vomiting and diarrhoea can contribute to fluid loss. A clinician should assess symptoms and hydration needs individually, particularly for children, older adults and people with medical conditions.",
      },
      {
        question: "Is English-speaking medical assistance available?",
        answer:
          "Yes. International visitors can explain their symptoms and receive medical information in English.",
      },
      {
        question: "Do you cover private villas around Kalkan?",
        answer:
          "Coverage includes villas and accommodation in Kalkan Centre, Kalamar, Kışla, İslamlar, Üzümlü, Sarıbelen and nearby areas, subject to availability.",
      },
      {
        question: "When should I call 112?",
        answer:
          "Call 112 immediately for unconsciousness, collapse, severe breathing difficulty or another condition that appears life-threatening.",
      },
    ],
  },
  {
    slug: "iv-therapy-kalkan",
    metaTitle: "IV Therapy Kalkan | Medically Assessed Hotel & Villa Care",
    metaDescription:
      "Looking for IV therapy in Kalkan? Contact our English-speaking medical team for an individual assessment at your hotel, villa or home.",
    eyebrow: "Clinically Assessed Medical Support",
    heading: "IV Therapy in Kalkan",
    intro:
      "Contact our English-speaking medical team for an individual medical assessment if you are concerned about dehydration or illness while staying in Kalkan. IV treatment is provided only when considered medically appropriate after clinical evaluation.",
    contentSections: [
      {
        title: "Assessment before any IV treatment",
        paragraphs: [
          "IV fluids are not automatically suitable for every patient or every illness. Before treatment, a clinician should review symptoms, medical history, current medicines, hydration status and any factors that may make IV treatment unsuitable.",
          "If IV therapy is considered appropriate after assessment, the medical team will explain the proposed care and any follow-up recommendations. Alternative treatment or hospital referral may be advised when necessary.",
        ],
        bullets: [
          "Individual medical assessment",
          "Hydration status review",
          "Hotel, villa and home visits",
          "Clear explanation in English",
        ],
      },
      {
        title: "Medical support for dehydration concerns",
        paragraphs: [
          "Fluid loss may occur with vomiting, diarrhoea, fever or reduced fluid intake. The appropriate response depends on symptom severity, the patient’s age, existing conditions and clinical findings.",
          "For severe symptoms, confusion, collapse, chest pain, serious breathing difficulty or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
        ],
      },
      {
        title: "IV assessment at hotels and villas in Kalkan",
        paragraphs: [
          "Medical assessments may be arranged at hotels, private villas, apartments and homes across Kalkan Centre, Kalamar, Kışla and nearby areas. Contact the team with the patient’s information and exact location to confirm availability.",
        ],
      },
    ],
    services: [
      "Medical assessment before treatment",
      "Hydration status evaluation",
      "IV fluids when medically appropriate",
      "Hotel and villa medical visits",
      "English-speaking consultation",
      "Vital-sign assessment",
      "Treatment and follow-up guidance",
      "Hospital referral when required",
    ],
    areas: [
      "Kalkan Centre",
      "Kalamar",
      "Kışla",
      "İslamlar",
      "Üzümlü",
      "Nearby locations",
    ],
    faq: [
      {
        question: "Can I request IV therapy at my hotel in Kalkan?",
        answer:
          "You may request a medical assessment at your hotel. IV treatment is offered only when a qualified clinician considers it appropriate after evaluating the patient.",
      },
      {
        question: "Is IV therapy suitable for everyone?",
        answer:
          "No. Suitability depends on symptoms, medical history, current medicines, clinical findings and possible risks. An individual assessment is required.",
      },
      {
        question: "Can the medical team visit a private villa?",
        answer:
          "Yes. Assessments may be arranged at private villas, apartments, hotels and homes, subject to current availability.",
      },
      {
        question: "Is English communication available?",
        answer:
          "Yes. The assessment, proposed care and follow-up information can be explained in English.",
      },
      {
        question: "What details should I send?",
        answer:
          "Send the patient’s age, symptoms, when they started, medical conditions, current medicines and exact WhatsApp location.",
      },
      {
        question: "What should I do in a serious emergency?",
        answer:
          "Call 112 immediately for unconsciousness, collapse, chest pain, severe breathing difficulty, stroke symptoms or another life-threatening condition.",
      },
    ],
  },
  {
    slug: "tourist-doctor-kalkan",
    metaTitle: "Tourist Doctor Kalkan | English-Speaking Medical Help",
    metaDescription:
      "Need medical help during your Kalkan holiday? Contact an English-speaking tourist doctor for hotel, villa and accommodation visits.",
    eyebrow: "Medical Assistance for International Visitors",
    heading: "Tourist Doctor in Kalkan",
    intro:
      "Private English-speaking medical assistance for visitors who become unwell during their holiday in Kalkan. Contact the team to discuss a doctor visit at your hotel, villa, apartment or holiday accommodation.",
    contentSections: [
      {
        title: "Clear medical support during your holiday",
        paragraphs: [
          "Becoming unwell in another country can feel stressful when you do not know where to go or how to explain your symptoms. Kalkan Doctor helps international visitors communicate in English and understand the recommended next step.",
          "Send the patient’s age, symptoms, accommodation name and exact WhatsApp location. Current availability and whether a visit at your location is suitable will be discussed after the information is reviewed.",
        ],
        bullets: [
          "English-speaking medical consultation",
          "Hotel and boutique accommodation visits",
          "Private villa and apartment visits",
          "Support for tourists and international families",
        ],
      },
      {
        title: "Common holiday health concerns",
        paragraphs: [
          "Tourists may request assessment for stomach problems, vomiting, diarrhoea, dehydration concerns, fever, respiratory symptoms, ear complaints, minor injuries and other unexpected illnesses. Care is based on the patient’s individual clinical assessment.",
          "For unconsciousness, severe breathing difficulty, major trauma, stroke symptoms or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
        ],
      },
      {
        title: "Medical visits throughout the Kalkan area",
        paragraphs: [
          "Visits may be arranged in Kalkan Centre, Kalamar, Kışla, Ortaalan, İslamlar, Üzümlü, Sarıbelen and nearby accommodation areas. Exact coverage and availability are confirmed after the location is received.",
        ],
      },
    ],
    services: [
      "English-speaking doctor consultation",
      "Hotel and villa doctor visits",
      "Holiday illness assessment",
      "Food poisoning assessment",
      "Dehydration evaluation",
      "Minor injury assessment",
      "Prescription support when indicated",
      "Hospital referral guidance",
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
        question: "Can tourists request a doctor at their hotel in Kalkan?",
        answer:
          "Yes. When appropriate and available, a private medical visit may be arranged at a hotel, villa, apartment or holiday accommodation.",
      },
      {
        question: "Does the medical team speak English?",
        answer:
          "Yes. International visitors can explain their symptoms and receive medical information in English.",
      },
      {
        question: "What information should I send through WhatsApp?",
        answer:
          "Send the patient’s age, main symptoms, when they started, relevant medical conditions, accommodation name and exact location.",
      },
      {
        question: "Can you help with illness during a holiday?",
        answer:
          "Tourists may request assessment for suitable non-life-threatening health concerns. The appropriate care depends on the individual clinical evaluation.",
      },
      {
        question: "Which parts of Kalkan are covered?",
        answer:
          "Coverage includes Kalkan Centre, Kalamar, Kışla, İslamlar, Üzümlü, Sarıbelen and nearby accommodation areas, subject to availability.",
      },
      {
        question: "What should I do in a life-threatening emergency?",
        answer:
          "Call Türkiye’s emergency number 112 immediately for unconsciousness, severe breathing difficulty, major trauma or another life-threatening condition.",
      },
    ],
  },
  {
    slug: "doctor-in-patara",
    metaTitle: "Doctor in Patara | English-Speaking Hotel & Villa Visits",
    metaDescription:
      "Need a doctor in Patara? Contact our English-speaking medical team for private visits to hotels, guesthouses, villas and homes.",
    eyebrow: "Private Medical Assistance in Patara",
    heading: "English-Speaking Doctor in Patara",
    intro:
      "Private medical assistance for tourists, residents and families in Patara. Contact the team to discuss a doctor visit at your hotel, guesthouse, villa, apartment or home.",
    contentSections: [
      {
        title: "Medical care at your location in Patara",
        paragraphs: [
          "Travelling while you feel unwell may be difficult. When a visit at the patient’s location is suitable, private medical assistance may be arranged at accommodation and residential addresses in Patara.",
          "Contact the team by telephone or WhatsApp with the patient’s age, symptoms, accommodation details and exact location. Availability and the most appropriate next step will then be discussed.",
        ],
        bullets: [
          "Hotel and guesthouse doctor visits",
          "Private villa and home visits",
          "English-speaking medical assistance",
          "Support for tourists and residents",
        ],
      },
      {
        title: "Assessment for unexpected illness",
        paragraphs: [
          "Patients may request medical assessment for stomach problems, possible dehydration, fever, respiratory symptoms, ear complaints, minor injuries and other suitable non-life-threatening concerns. Recommendations depend on the individual examination.",
          "For severe breathing difficulty, unconsciousness, major trauma or another life-threatening emergency, call Türkiye’s emergency number 112 immediately.",
        ],
      },
      {
        title: "Patara and nearby service coverage",
        paragraphs: [
          "Coverage may include Patara village, local hotels, guesthouses, holiday villas and nearby locations between Patara and Kalkan. Current availability is confirmed after receiving the exact address or WhatsApp location.",
        ],
      },
    ],
    services: [
      "Private doctor consultation",
      "Hotel and guesthouse visits",
      "Villa and home medical visits",
      "Tourist medical assistance",
      "Food poisoning assessment",
      "Dehydration evaluation",
      "Prescription support when indicated",
      "Medical referral guidance",
    ],
    areas: [
      "Patara",
      "Gelemiş",
      "Patara Hotels",
      "Holiday Villas",
      "Guesthouses",
      "Nearby locations",
    ],
    faq: [
      {
        question: "Can a doctor visit my hotel or guesthouse in Patara?",
        answer:
          "Yes. When suitable and available, a private visit may be arranged at hotels, guesthouses, villas, apartments and homes.",
      },
      {
        question: "Is English-speaking assistance available in Patara?",
        answer:
          "Yes. International patients can communicate their symptoms and receive medical information in English.",
      },
      {
        question: "Do you provide medical help for tourists?",
        answer:
          "Yes. The service supports tourists, residents, families and international visitors staying in Patara.",
      },
      {
        question: "How do I request a doctor?",
        answer:
          "Call or send a WhatsApp message with the patient’s age, symptoms, accommodation name and exact location.",
      },
      {
        question: "Do you cover villas around Patara?",
        answer:
          "Villa and holiday accommodation visits may be arranged in Patara and nearby areas, subject to current availability.",
      },
      {
        question: "When should I call 112?",
        answer:
          "Call 112 immediately for unconsciousness, severe breathing difficulty, major trauma, stroke symptoms or another life-threatening emergency.",
      },
    ],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}