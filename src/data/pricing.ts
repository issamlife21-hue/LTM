// src/data/pricing.ts
// All amounts in USD. Source: liberiatraffic.com price list.

export type RegistrationRow = {
  code: string;
  category: string;
  weightClass?: string;
  publicTransport?: boolean;
  basePrice: number;
  nfrCharges: number | null;
  additionalCharges: string | null;
  totalCost: number | null;
  notes?: string;
};

export type DriverLicenseRow = {
  category: string; // e.g. "A", "A1", "B", "C", "D"
  description: string;
  type: "Private" | "Commercial";
  charge: number;
};

export type SimpleChargeRow = {
  category: string;
  charge: number;
  notes?: string;
};

export type TowingRow = {
  vehicleType: string;
  vehicleCategoryCodes: string[];
  upTo25MilesUsd: number;
  additionalMileRateUsd: number;
};

export type ImpoundmentRow = {
  durationDays: string;
  ratePerDayUsd: number | null;
  notes?: string;
};

// Vehicle Registration Charges

export const vehicleRegistrationCharges: RegistrationRow[] = [
  { code: "A1", category: "Compact Car", weightClass: "<1.5 tons", basePrice: 75.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 78.0 },
  { code: "A2", category: "Small & Mid-Sized Sedan", weightClass: "1.5 to 1.75 tons", basePrice: 100.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 103.0 },
  { code: "A3", category: "Large, Luxury Sedan, or Minivan", weightClass: "1.75 to 2.25 tons", basePrice: 125.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 128.0 },
  { code: "A4", category: "Small SUV or Compact Pickup", weightClass: "<1.75 tons", basePrice: 140.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 143.0 },
  { code: "A5", category: "Mid-Sized SUV or Pickup", weightClass: "1.75 to 2.25 tons", basePrice: 150.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 153.0 },
  { code: "A6", category: "Large, Heavy Duty SUV or Pickup", weightClass: "2.25 to 4.25 tons", basePrice: 200.0, nfrCharges: 3.0, additionalCharges: null, totalCost: 203.0 },
  { code: "B1", category: "Mini Bus", weightClass: "<3.75 tons", basePrice: 200.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 206.0 },
  { code: "B2", category: "Passenger Bus", weightClass: "3.75 to 5 tons", basePrice: 250.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 256.0 },
  { code: "B3", category: "Large Passenger Bus", weightClass: "5 to 12 tons", basePrice: 300.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 306.0 },
  { code: "B4", category: "Articulated Bus, Double-Decker, or Motor Coach", weightClass: "12 to 18 tons", basePrice: 400.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 406.0 },
  { code: "B1", category: "Mini Bus", weightClass: "<3.75 tons", publicTransport: true, basePrice: 150.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 156.0 },
  { code: "B2", category: "Passenger Bus", weightClass: "3.75 to 5 tons", publicTransport: true, basePrice: 150.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 156.0 },
  { code: "B3", category: "Large Passenger Bus", weightClass: "5 to 12 tons", publicTransport: true, basePrice: 150.0, nfrCharges: 6.0, additionalCharges: null, totalCost: 156.0 },
  { code: "C1", category: "Cargo: Mini Cargo Vehicle", weightClass: "<1.5 tons", basePrice: 150.0, nfrCharges: 9.0, additionalCharges: null, totalCost: 159.0 },
  { code: "C2", category: "Cargo: Small Cargo Vehicle", weightClass: "1.5 to 3 tons", basePrice: 200.0, nfrCharges: 9.0, additionalCharges: null, totalCost: 209.0 },
  { code: "C3", category: "Cargo: Mid-Sized Cargo Vehicle", weightClass: "3 to 4.5 tons", basePrice: 300.0, nfrCharges: 9.0, additionalCharges: null, totalCost: 309.0 },
  { code: "C4", category: "Cargo: Full-Sized Cargo Vehicle", weightClass: "4.5 to 6 tons", basePrice: 400.0, nfrCharges: 9.0, additionalCharges: null, totalCost: 409.0 },
  { code: "C5", category: "Cargo: Large Cargo Vehicle", weightClass: "6 to 8 tons", basePrice: 500.0, nfrCharges: 9.0, additionalCharges: null, totalCost: 509.0 },
  { code: "M1", category: "Motorcycle, Two Wheels", weightClass: "<250cc", publicTransport: true, basePrice: 25.0, nfrCharges: null, additionalCharges: null, totalCost: 25.0 },
  { code: "M2", category: "Motorcycle, Two Wheels", weightClass: "<400cc", basePrice: 50.0, nfrCharges: null, additionalCharges: null, totalCost: 50.0 },
  { code: "M3", category: "Motorcycle, Two Wheels", weightClass: ">400cc", basePrice: 75.0, nfrCharges: null, additionalCharges: null, totalCost: 75.0 },
  { code: "M4", category: "Tricycle, Three Wheels", weightClass: "Passenger Carrier", basePrice: 50.0, nfrCharges: null, additionalCharges: null, totalCost: 50.0 },
  { code: "M5", category: "Tricycle, Three Wheels", weightClass: "Cargo Carrier", basePrice: 50.0, nfrCharges: null, additionalCharges: null, totalCost: 50.0 },
  { code: "H", category: "Heavy Duty / Heavy Goods Truck", weightClass: ">8 tons", basePrice: 500.0, nfrCharges: 12.0, additionalCharges: "(Weight in tons − 8) × $20", totalCost: null, notes: "Total varies based on tonnage above 8 tons." },
  { code: "EH", category: "Earth Moving Equipment", basePrice: 500.0, nfrCharges: null, additionalCharges: null, totalCost: 500.0 },
  { code: "-", category: "Trailer, Heavy Duty, Semi Trailer", basePrice: 50.0, nfrCharges: 12.0, additionalCharges: "Number of Axles × $100", totalCost: null, notes: "Total = (Axles × $100) + $50 + $12" },
  { code: "-", category: "Trailer, Heavy Duty, Full Trailer", basePrice: 75.0, nfrCharges: 12.0, additionalCharges: "Number of Axles × $100", totalCost: null, notes: "Total = (Axles × $100) + $75 + $12" },
  { code: "-", category: "Trailer, Light Duty, Small Utility & Tow Dolly Class 1", weightClass: "<45 sq.ft.", basePrice: 25.0, nfrCharges: null, additionalCharges: null, totalCost: 25.0 },
  { code: "-", category: "Trailer, Light Duty, Small Utility & Tow Dolly Class 2", weightClass: "45 to 75 sq.ft.", basePrice: 50.0, nfrCharges: null, additionalCharges: null, totalCost: 50.0 },
  { code: "-", category: "Trailer, Light Duty, Small Cargo Class 1", weightClass: "<230 cu.ft.", basePrice: 25.0, nfrCharges: null, additionalCharges: null, totalCost: 25.0 },
  { code: "-", category: "Trailer, Light Duty, Small Cargo Class 2", weightClass: "230 to 400 cu.ft.", basePrice: 50.0, nfrCharges: null, additionalCharges: null, totalCost: 50.0 },
  { code: "-", category: "Taxi (A1, A2, or A3)", basePrice: 75.0, nfrCharges: null, additionalCharges: null, totalCost: null, notes: "Specialty rate for licensed taxi service." },
];

export const licensePlateCharges = {
  testPlate: 250,
  customizedPlatePerCharacter: 30,
};

export const driverLicenseCharges: DriverLicenseRow[] = [
  { category: "A", description: "Motorcycle", type: "Private", charge: 35.0 },
  { category: "A1", description: "Tricycle", type: "Commercial", charge: 45.0 },
  { category: "B", description: "Car", type: "Private", charge: 35.0 },
  { category: "C", description: "Heavy Duty", type: "Commercial", charge: 100.0 },
  { category: "D", description: "Chauffeur", type: "Commercial", charge: 45.0 },
];

export const drivingTestCharges: SimpleChargeRow[] = [
  { category: "Test and certificate only (without school)", charge: 20.0 },
];

export const vehicleInspectionCharges: SimpleChargeRow[] = [
  { category: "Motorcycle", charge: 15.0 },
  { category: "Tricycle", charge: 30.0 },
  { category: "Private Car", charge: 60.0 },
  { category: "Light Truck", charge: 100.0 },
  { category: "Heavy Duty", charge: 200.0 },
];

export const vehicleTowingCharges: TowingRow[] = [
  { vehicleType: "Motorcycle (250cc to 400cc+)", vehicleCategoryCodes: ["M1", "M2", "M3"], upTo25MilesUsd: 20.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Tricycle (Passenger / Cargo)", vehicleCategoryCodes: ["M4", "M5"], upTo25MilesUsd: 50.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Small Vehicle (less than 1.5 tons)", vehicleCategoryCodes: ["A1", "A4", "C1"], upTo25MilesUsd: 100.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Mid-sized Vehicle (1.5 to 3 tons)", vehicleCategoryCodes: ["A2", "A3", "A4", "A5", "A6", "C2", "B1"], upTo25MilesUsd: 150.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Large Vehicle (3 to 4.5 tons)", vehicleCategoryCodes: ["A6", "C3", "B1", "B2"], upTo25MilesUsd: 300.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Medium-Duty Vehicle (4.5 to 6 tons)", vehicleCategoryCodes: ["B2", "B3", "C4"], upTo25MilesUsd: 450.0, additionalMileRateUsd: 1.0 },
  { vehicleType: "Heavy-Duty Truck and Semi-Trailer (6 to 8 tons)", vehicleCategoryCodes: ["B3", "C5"], upTo25MilesUsd: 550.0, additionalMileRateUsd: 1.0 },
];

export const vehicleImpoundmentCharges: ImpoundmentRow[] = [
  { durationDays: "0 to 5 days", ratePerDayUsd: 0, notes: "No charge. Grace period." },
  { durationDays: "6 to 30 days", ratePerDayUsd: 10.0 },
  { durationDays: "30+ days", ratePerDayUsd: null, notes: "Rate determined by traffic law." },
];

export const pricingTabs = [
  { id: "registration", label: "Vehicle Registration" },
  { id: "license", label: "Driver License" },
  { id: "driving-test", label: "Driving Test" },
  { id: "inspection", label: "Vehicle Inspection" },
  { id: "towing", label: "Towing" },
  { id: "impoundment", label: "Impoundment" },
  { id: "plates", label: "License Plates" },
] as const;
