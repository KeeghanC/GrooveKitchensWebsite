import { TCertificatesAndCompliance } from '../about-us/compliance-and-certificates.types';

export const certificatesAndCompliances: TCertificatesAndCompliance = [
  'More than 30 years of kitchen-making and installation experience',
  'A personal, collaborative approach from home visit to installation',
  'New kitchens, renovations, facelifts, and laundry makeovers',
  'Quality materials and hardware with applicable manufacturer warranties',
] as const satisfies TCertificatesAndCompliance;
