export type GlobeRegion = 
  | "Africa"
  | "Asia"
  | "Central America"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania"
  | "Mesopotamia";

export type GlobeEntry = {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  date: string;
  latitude: number;
  longitude: number;
  region: string;
  details?: {
    classification?: string;
    geographicLocation?: string;
    mapPlacement?: string;
    narrative?: string;
    chronology?: string;
    evidence?: string;
    references?: {
      label: string;
      url: string;
    }[];
  };
  links?: {
    label: string;
    url: string;
  }[];
};

export const REGIONS: Array<"All" | GlobeRegion> = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "Central America",
  "South America",
  "Oceania",
  "Mesopotamia",
];

const REGION_ALIASES: Record<string, GlobeRegion> = {
  Africa: "Africa",
  Asia: "Asia",
  "Central America": "Central America",
  Europe: "Europe",
  Mesopotamia: "Mesopotamia",
  "Mesopotamia / Ancient Near East": "Mesopotamia",
  "Mesoamerica / Central America": "Central America",
  "North America": "North America",
  Oceania: "Oceania",
  "Oceania / Pacific": "Oceania",
  "South America": "South America",
};

export function normalizeRegion(region: string): GlobeRegion | null {
  return REGION_ALIASES[region] ?? null;
}
