import { TService } from './service/service.type';

export const servicesOffered: TService[] = [
  {
    serviceTitle: 'Kitchen Design, Making & Installation',
    serviceDescription:
      'From your first ideas and home visit through to custom cabinetry and installation, we create kitchens around your home, lifestyle, and budget.',
    image: 'assets/service-design-planning.webp',
  },
  {
    serviceTitle: 'Kitchen Renovations & Facelifts',
    serviceDescription:
      'Refresh what you have or rework the whole space. We can update tired kitchens with a considered facelift or deliver a complete renovation.',
    image: 'assets/service-renovations.webp',
  },
  {
    serviceTitle: 'Custom Cabinetry & Storage',
    serviceDescription:
      'Make every centimetre count with cabinetry, drawers, pantry storage, and integrated solutions designed around how you cook and live.',
    image: 'assets/service-storage.webp',
  },
  {
    serviceTitle: 'Laundry Makeovers',
    serviceDescription:
      'Bring order to one of the hardest-working rooms in your home with practical cabinetry, useful storage, and a layout made for everyday life.',
    image: 'assets/service-storage.webp',
  },
  {
    serviceTitle: 'Benchtops, Hardware & Finishes',
    serviceDescription:
      'Choose finishes that look great and work hard, from durable benchtops and handles to sinks, tapware, lighting, and appliance integration.',
    image: 'assets/service-hardware-finishes.webp',
  },
  {
    serviceTitle: 'Personal Advice & Site Visits',
    serviceDescription:
      'We meet with you, listen to what matters, and help turn your vision into a practical plan that feels right for your home.',
    image: 'assets/service-design-planning.webp',
  },
] as const satisfies TService[];
