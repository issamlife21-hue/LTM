// src/data/faqs.ts
// Source: liberiatraffic.com Questions & Answers page.

export type FAQCategory = "general" | "driver-license" | "vehicle-registration";

export type FAQ = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  bullets?: string[];
};

export const faqCategories: { id: FAQCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "driver-license", label: "Driver License" },
  { id: "vehicle-registration", label: "Vehicle Registration" },
];

export const faqs: FAQ[] = [
  {
    id: "q1",
    category: "general",
    question: "Who is Liberia Traffic Management?",
    answer:
      "LTM is the entity authorized by the Government of Liberia to handle vehicle inspection, vehicle registration, license plates, driver licenses, and traffic violations.",
  },
  {
    id: "q4",
    category: "general",
    question: "Do you have other branches?",
    answer:
      "More service centers are planned. The current list lives on the Find a Service Center page.",
  },
  {
    id: "q5",
    category: "general",
    question: "How can I contact LTM?",
    answer:
      "Visit an LTM service center. Phone numbers, address, and hours for each location are on the Find a Service Center page.",
  },
  {
    id: "q8",
    category: "general",
    question: "Do I need an appointment?",
    answer: "No. Walk in during working hours.",
  },
  {
    id: "q9",
    category: "general",
    question: "Do I need to be there in person?",
    answer:
      "Only for your first visit, so we can take your photo and biometrics. After that, you can send someone to handle renewals.",
  },
  {
    id: "q10",
    category: "general",
    question: "How long does a visit take?",
    answer: "About 15 minutes if you have all your documents ready.",
  },
  {
    id: "q11",
    category: "general",
    question: "Are services available online?",
    answer:
      "All services are handled in person at an LTM service center. You can visit, call, or email us. Phone numbers, address, and hours are on the Find a Service Center page.",
  },
  {
    id: "q12",
    category: "general",
    question: "Can a company process applications in bulk?",
    answer:
      "Yes. Send an authorized representative with the paperwork. Same-day service is possible depending on volume.",
  },
  {
    id: "q13",
    category: "general",
    question: "Can LTM come to our enterprise?",
    answer: "Yes. Contact the Call Center to arrange it.",
  },
  {
    id: "q14",
    category: "general",
    question: "Are there volume discounts?",
    answer: "No. Fees are set by the Government and cannot be discounted.",
  },
  {
    id: "q15",
    category: "general",
    question: "How do I get service from a remote area?",
    answer:
      "Additional branches and authorized delegates (such as bank branches) are planned to extend coverage.",
  },
  {
    id: "q16",
    category: "driver-license",
    question: "How do I apply for a Driver License?",
    answer: "Visit the service center with the items below:",
    bullets: [
      "Valid ID (national ID, passport, or previous driving license)",
      "Application form (filled on arrival)",
      "Blood type",
      "Personal details",
    ],
  },
  {
    id: "q17",
    category: "driver-license",
    question: "How much does a Driver License cost?",
    answer:
      "US$35 for motorcycle or private car, up to US$100 for heavy duty. Full schedule on the Pricing page.",
  },
  {
    id: "q18",
    category: "vehicle-registration",
    question: "How do I register a vehicle?",
    answer: "Visit the service center with the items below:",
    bullets: [
      "Valid ID",
      "Personal information",
      "Previous vehicle registration",
      "Customs clearance documents (newly imported vehicles)",
      "Bill of sale plus second-party ID and contact details (ownership transfers)",
    ],
  },
  {
    id: "q19",
    category: "vehicle-registration",
    question: "Is vehicle inspection mandatory?",
    answer:
      "Yes. You will be in violation without a passing inspection report.",
  },
  {
    id: "q20",
    category: "vehicle-registration",
    question: "What happens if my vehicle fails inspection?",
    answer:
      "You have 45 days to make repairs and re-inspect. After that you risk traffic penalties.",
  },
  {
    id: "q21",
    category: "vehicle-registration",
    question: "What does the inspection check?",
    answer: "For 2025: lights, brakes, and windshield wipers.",
  },
  {
    id: "q22",
    category: "vehicle-registration",
    question: "Is vehicle insurance mandatory?",
    answer:
      "Yes, by law. You can complete registration first and then buy insurance from any provider; insurers are also on our premises.",
  },
  {
    id: "q23",
    category: "vehicle-registration",
    question: "What if I don't buy insurance?",
    answer: "You will be subject to serious traffic violations.",
  },
  {
    id: "q24",
    category: "vehicle-registration",
    question: "Do you provide customized plates?",
    answer:
      "Yes. Customized plates are US$30 per character. Test plates are US$250.",
  },
];
