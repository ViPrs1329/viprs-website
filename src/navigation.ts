import { getPermalink } from './utils/permalinks';

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
        { text: 'Email Us', href: 'mailto:prioryvizrobotics@stlprioryschool.org' },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: 'Team Handbook',
      href: 'https://docs.google.com/document/d/1UfOUVw6jp5nT9yA6pBDy94vnklsgLhi_GdadQkYaWA8/edit?tab=t.0',
      target: '_blank',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/viprs1329/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/viprs1329' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/ViPrs1329/ViPrs2026/tree/GRCBOTNOLL' },
  ],
  footNote: `
    FRC Team 1329 · The ViPrs · St. Louis, Missouri ·
    <a class="hover:underline" href="mailto:prioryvizrobotics@stlprioryschool.org">prioryvizrobotics@stlprioryschool.org</a>
  `,
};
