import { companyName as companyName } from './company-name.const';

export const NAV_CONTENT = {
  logo: {
    text: companyName,
    link: '/',
  },
  links: [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Kitchen Inspiration', url: '/projects' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Testimonials', url: '/testimonials' },
  ],
} as const;
