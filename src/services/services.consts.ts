import { TService } from './service/service.type';

export const servicesOffered: TService[] = [
  {
    serviceTitle: 'Kitchen Design & Planning',
    serviceDescription:
      'Bring your ideas, plans, and inspiration to a collaborative design process. We help shape a kitchen layout that suits your home, lifestyle, and budget.',
    image: 'assets/service-design-planning.webp',
  },
  {
    serviceTitle: 'Custom Cabinetry & Storage',
    serviceDescription:
      'Make every centimetre count with cabinetry, drawers, pantry storage, and integrated solutions designed around how you cook and live.',
    image: 'assets/service-storage.webp',
  },
  {
    serviceTitle: 'Benchtops, Hardware & Finishes',
    serviceDescription:
      'Choose finishes that look great and work hard, from durable benchtops and handles to sinks, tapware, lighting, and appliance integration.',
    image: 'assets/service-hardware-finishes.webp',
  },
  {
    serviceTitle: 'Kitchen Renovations & Installation',
    serviceDescription:
      'Whether you are refreshing an existing space or planning a complete renovation, we coordinate the details for a smooth, well-finished result.',
    image: 'assets/service-renovations.webp',
  },
] as const satisfies TService[];
