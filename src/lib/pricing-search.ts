// Plain-language synonyms for the LTM pricing tables.
//
// Citizens shouldn't have to know that a sedan is "A2" or that a passenger
// minibus is "B1". This module builds a hidden `_search` haystack on every
// pricing row that includes the row's official text plus everyday Liberian
// words (sedan, jeep, pickup, motorcycle, bike, pen-pen, keke, taxi, bus,
// cargo, truck, lorry, trailer, semi…). The PriceTable searches that field,
// so typing "taxi", "bike", or "pickup" lands on the right row immediately.

import type {
  DriverLicenseRow,
  ImpoundmentRow,
  RegistrationRow,
  SimpleChargeRow,
  TowingRow,
} from "@/data/pricing";

// Returns a list of everyday Liberian / informal words that match this
// official category string. Matched against case-insensitive substrings.
function categorySynonyms(category: string): string[] {
  const c = category.toLowerCase();
  const tags: string[] = [];

  if (c.includes("sedan")) tags.push("sedan", "car", "saloon");
  if (c.includes("compact car") || c === "car")
    tags.push("car", "sedan", "compact");
  if (c.includes("minivan")) tags.push("minivan", "van");
  if (c.includes("suv")) tags.push("suv", "jeep", "4x4");
  if (c.includes("pickup")) tags.push("pickup", "pick up", "pick-up", "truck");
  if (c.includes("mini bus") || c.includes("minibus"))
    tags.push("minibus", "mini bus", "bus", "coaster");
  if (c.includes("passenger bus") || c.includes("motor coach"))
    tags.push("bus", "coach", "passenger bus");
  if (c.includes("cargo")) tags.push("cargo", "truck", "delivery");
  if (c.includes("motorcycle")) tags.push("motorcycle", "bike", "pen-pen", "okada");
  if (c.includes("tricycle"))
    tags.push("tricycle", "keke", "three wheel", "3-wheel", "3 wheeler");
  if (c.includes("heavy duty") || c.includes("heavy goods"))
    tags.push("truck", "lorry", "big truck", "heavy duty");
  if (c.includes("earth moving"))
    tags.push("earth moving", "bulldozer", "excavator", "equipment");
  if (c.includes("trailer")) tags.push("trailer", "semi", "semi-trailer");
  if (c.includes("taxi")) tags.push("taxi", "cab");
  if (c.includes("light truck")) tags.push("pickup", "truck", "light truck");
  if (c.includes("private car")) tags.push("car", "sedan", "private car");

  return tags;
}

function joinHaystack(parts: Array<string | number | null | undefined>): string {
  return parts
    .filter((p): p is string | number => p !== null && p !== undefined && p !== "")
    .map(String)
    .join(" ")
    .toLowerCase();
}

// Registration rows ----------------------------------------------------------

export type SearchableRegistrationRow = RegistrationRow & { _search: string };

export function enrichRegistrationRows(
  rows: RegistrationRow[],
): SearchableRegistrationRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([
      r.code,
      r.category,
      r.weightClass,
      r.notes,
      r.additionalCharges,
      r.publicTransport ? "public transport commercial taxi" : "private",
      "registration fees fee cost",
      ...categorySynonyms(r.category),
    ]),
  }));
}

// Driver license rows --------------------------------------------------------

export type SearchableDriverLicenseRow = DriverLicenseRow & { _search: string };

export function enrichDriverLicenseRows(
  rows: DriverLicenseRow[],
): SearchableDriverLicenseRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([
      r.category,
      r.description,
      r.type,
      "driver license licence",
      ...categorySynonyms(r.description),
    ]),
  }));
}

// Inspection / driving test rows --------------------------------------------

export type SearchableSimpleRow = SimpleChargeRow & { _search: string };

export function enrichInspectionRows(
  rows: SimpleChargeRow[],
): SearchableSimpleRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([
      r.category,
      r.notes,
      "inspection",
      ...categorySynonyms(r.category),
    ]),
  }));
}

export function enrichDrivingTestRows(
  rows: SimpleChargeRow[],
): SearchableSimpleRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([r.category, r.notes, "driving test exam"]),
  }));
}

// Towing rows ---------------------------------------------------------------

export type SearchableTowingRow = TowingRow & { _search: string };

export function enrichTowingRows(rows: TowingRow[]): SearchableTowingRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([
      r.vehicleType,
      ...r.vehicleCategoryCodes,
      "towing tow",
      ...categorySynonyms(r.vehicleType),
    ]),
  }));
}

// Impoundment rows ----------------------------------------------------------

export type SearchableImpoundmentRow = ImpoundmentRow & { _search: string };

export function enrichImpoundmentRows(
  rows: ImpoundmentRow[],
): SearchableImpoundmentRow[] {
  return rows.map((r) => ({
    ...r,
    _search: joinHaystack([
      r.durationDays,
      r.notes,
      "impoundment impound storage",
    ]),
  }));
}
