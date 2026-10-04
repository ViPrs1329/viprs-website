// Sponsors for the Sponsors page (src/pages/sponsors.astro).
// Logos live in src/assets/images/sponsors/.
//   logo     – shown in light mode (and in dark mode if there's no logoDark)
//   logoDark – optional light-colored version shown in dark mode
// A sponsor without a logo yet is shown as its name in text.

export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
  logoDark?: string;
}

const logo = (file: string) => `~/assets/images/sponsors/${file}`;

export const gold: Sponsor[] = [
  {
    name: 'Saint Louis Priory School',
    url: 'https://www.priory.org',
    logo: logo('Priory-logo-black.svg'),
    logoDark: logo('Priory-logo-white.svg'),
  },
  {
    name: 'Visitation Academy',
    url: 'https://www.visitationacademy.org',
    logo: logo('Viz-logo-black.svg'),
    logoDark: logo('Viz-logo-white.svg'),
  },
  {
    name: 'The Whitfield School',
    url: 'https://www.whitfieldschool.org',
    logo: logo('Whitfield-logo.svg'),
  },
];

export const silver: Sponsor[] = [];

export const bronze: Sponsor[] = [];
