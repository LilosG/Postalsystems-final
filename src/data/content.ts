import servicesJson from "./services.json";
import areasJson from "./areas.json";

export type ServiceData = {
  slug?: string;
  name: string;
  summary?: string;
  content?: string;
  blurb?: string;
  bullets?: string[];
};

export type AreaData = {
  city: string;
  state?: string;
};

export const SERVICES_DATA = servicesJson as ServiceData[];
export const AREAS_DATA = areasJson as AreaData[];
