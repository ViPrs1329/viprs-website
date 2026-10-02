// Awards for the Awards section on the home page (src/components/widgets/Awards.astro).
//   banners – event wins, drawn as FIRST blue banners
//   awards  – everything else, listed newest first
// Leave `year` out if it isn't known yet.

export interface Award {
  title: string;
  event?: string;
  year?: number;
}

export const banners: Award[] = [
  { title: 'Winner', event: 'St. Louis Regional', year: 2025 },
];

export const awards: Award[] = [
  { title: 'Excellence in Engineering Award', year: 2015 },
  { title: 'Innovation in Control Award', year: 2013 },
  { title: 'FIRST Robotics Competition Finalist', year: 2010 },
  { title: 'Innovation in Control Award', year: 2019 },
];
