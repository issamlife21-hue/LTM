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
  { id: "q1", category: "general", question: "Who is Liberia Traffic Management?", answer: "Liberia Traffic Management (LTM) is a specialized traffic management group that has a concession from the Government of Liberia to provide traffic-related services to the public in collaboration with the Government. Our services include, but are not limited to, Vehicle Inspection, Vehicle Registration, License Plates, Driver License, and Traffic Violations." },
  { id: "q2", category: "general", question: "Is LTM a legal entity?", answer: "Absolutely. LTM is the only officially authorized entity by the Government of Liberia to provide these services." },
  { id: "q3", category: "general", question: "Where is LTM located?", answer: "Our service center is on SKD Boulevard, Monrovia, adjacent to SKD Stadium, at Elwa Junction near China Mall." },
  { id: "q4", category: "general", question: "Do you have other branches?", answer: "Currently this is the only branch. Other branches will be opening soon." },
  { id: "q5", category: "general", question: "How can I contact LTM?", answer: "Call our Call Center on 0888 900 070, 0770 900 080, or 0770 900 090. You can also reach us by email at Ltm@liberiatraffic.com." },
  { id: "q6", category: "general", question: "What are your working hours?", answer: "Monday to Friday, 8:00 AM to 5:00 PM. Saturday, 9:00 AM to 1:00 PM. Closed on Sunday. Please check our website and social media for any updates to working days and hours." },
  { id: "q7", category: "general", question: "Where can I find you online?", answer: "Our website is www.liberiatraffic.com and our Facebook page is Liberia Traffic Management." },
  { id: "q8", category: "general", question: "Do I need an appointment to obtain services?", answer: "No. You can simply walk in during our working hours." },
  { id: "q9", category: "general", question: "Do I need to be present personally? Can I appoint a third-party agent or broker?", answer: "For your first visit, you must be present in person so we can take a live photo and biometrics and establish your traffic file. After that, you may delegate someone else to process your renewals." },
  { id: "q10", category: "general", question: "How long does service take? Will I need multiple visits?", answer: "Our service center is designed as a one-stop shop where you can complete multiple same-day services. If you have all your documents ready, your visit can take as little as 15 minutes." },
  { id: "q11", category: "general", question: "Are you offering services online as well?", answer: "Not yet. Online services are in development." },
  { id: "q12", category: "general", question: "I'm a company with many applications to process for my employees or vehicles. How do I do it?", answer: "You can send your authorized company representative with all the required paperwork. They will submit the applications and return to collect them later. Same-day service is still possible depending on the number of transactions." },
  { id: "q13", category: "general", question: "Can LTM send a representative to our enterprise to process applications in bulk?", answer: "Yes. This can be arranged by contacting our Call Center." },
  { id: "q14", category: "general", question: "Are there discounts for volume applications?", answer: "No. This is a government service and prices are fixed." },
  { id: "q15", category: "general", question: "How do I obtain services if I live in a remote area?", answer: "Soon, we will have additional branches and authorized delegates (for example, bank branches) covering more remote areas of the country." },
  { id: "q16", category: "driver-license", question: "How do I apply for my Driver License?", answer: "Visit our service center with the following documents and information:", bullets: ["Valid ID (national ID, passport, or previous driving license)", "Fill out the application form on arrival at our center", "Blood type", "Personal details"] },
  { id: "q17", category: "driver-license", question: "How much does the Driver License cost?", answer: "Driver License fees are listed on our Pricing page. Charges range from US$35 (Motorcycle or Private Car) to US$100 (Heavy Duty)." },
  { id: "q18", category: "vehicle-registration", question: "How do I apply for my Vehicle Registration?", answer: "Visit our service center with the following documents and information:", bullets: ["Valid ID (national ID, passport, or previous driving license)", "Personal information", "Previous vehicle registration documents", "Customs clearance documents (for newly imported vehicles)", "Bill of sale, plus a valid ID and contact details of the second party (if you are buying or selling the vehicle and need to change ownership)"] },
  { id: "q19", category: "vehicle-registration", question: "Is vehicle inspection mandatory?", answer: "Yes. Vehicle inspection is mandatory. You will be in violation if you do not have a passing vehicle inspection report." },
  { id: "q20", category: "vehicle-registration", question: "What happens if my vehicle fails the inspection on the first attempt?", answer: "You have a grace period of 45 days to repair the faults. If you fail to do so within that window, you will be at risk of serious traffic penalties." },
  { id: "q21", category: "vehicle-registration", question: "What are the main criteria for failing the vehicle inspection test?", answer: "For 2025, inspection criteria are limited to lights, brakes, and windshield wipers." },
  { id: "q22", category: "vehicle-registration", question: "Is vehicle insurance mandatory?", answer: "Yes. Vehicle insurance is mandatory by law. You can complete your vehicle registration first and then obtain insurance from any provider of your choice. For your convenience, we have insurance providers located on our premises." },
  { id: "q23", category: "vehicle-registration", question: "What happens if I don't buy insurance for my motor vehicle?", answer: "You will be subject to serious traffic violations." },
  { id: "q24", category: "vehicle-registration", question: "Do you provide customized license plates?", answer: "Yes. We offer customized plates at US$30 per character. Test plates are also available at US$250." },
];
