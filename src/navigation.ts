import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Meet the Team', href: getPermalink('/team') },
    { text: 'Sponsors', href: getPermalink('/sponsors') },
    { text: 'Outreach', href: getPermalink('/outreach') },
  ],
  actions: [{ text: 'Sign Up', href: getPermalink('/signup') }],
};

export const footerData = {
  links: [
    {
      title: 'The ViPrs',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Meet the Team', href: getPermalink('/team') },
        { text: 'Outreach', href: getPermalink('/outreach') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Sign Up', href: getPermalink('/signup') },
        { text: 'Sponsors', href: getPermalink('/sponsors') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    FRC Team 1329 · The ViPrs · St. Louis, Missouri
  `,
};
