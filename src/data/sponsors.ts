// Sponsors for the Sponsors page (src/pages/sponsors.astro).
// Logos live in src/assets/images/sponsors/.
//   logo     – shown in light mode (and in dark mode if there's no logoDark)
//   logoDark – optional light-colored version shown in dark mode
//   showName – show the name under the logo, for logos that don't include it
// A sponsor without a logo yet is shown as its name in text.

export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
  logoDark?: string;
  showName?: boolean;
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

export const silver: Sponsor[] = [
  {
    name: 'Boeing',
    url: 'https://www.boeing.com',
    logo: logo('Boeing-logo.svg'),
    logoDark: logo('Boeing-logo-white.svg'),
  },
  {
    name: 'Haskell',
    url: 'https://www.haskell.com',
    logo: logo('Haskell-logo.svg'),
    logoDark: logo('Haskell-logo-white.svg'),
  },
];

export const bronze: Sponsor[] = [
  {
    name: 'Nidec',
    url: 'https://www.nidec.com',
    logo: logo('Nidec-logo.svg'),
  },
];

// Companies that donate products or services (software, parts, etc.) instead of money.
export const inKind: Sponsor[] = [
  {
    name: 'Onshape',
    url: 'https://www.onshape.com',
    logo: logo('onshape-black.svg'),
    logoDark: logo('onshape-white.svg'),
    showName: true,
  },
  {
    name: 'Autodesk Fusion',
    url: 'https://www.autodesk.com/products/fusion-360',
    logo: logo('Autodesk-Fusion-Logo.svg'),
    showName: true,
  },
  {
    name: 'Bastian Solutions',
    url: 'https://www.bastiansolutions.com',
    logo: logo('bastian-solutions-logo.svg'),
    logoDark: logo('bastian-solutions-logo-white.svg'),
  },
];
