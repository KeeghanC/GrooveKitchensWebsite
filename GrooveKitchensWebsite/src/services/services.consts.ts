import { TService } from "./service/service.type";

export const servicesOffered: TService[] = [
  {
    serviceTitle: 'Site Clearing & Preparation',
    serviceDescription: 'Complete clearing of vegetation, rocks, and debris to prepare your site for residential or commercial construction. Fast, efficient, and compliant with local council requirements.',
    imageUrl: '../assets/service_1_tractor.jpg',
  },
  {
    serviceTitle: 'Creek & River Management',
    serviceDescription: 'Specialised slash control, waterway management, and restoration services. We unblock watercourses to ensure optimal water flow and protect natural ecosystems.',
    imageUrl: '../assets/service_creek.jpg',
  },
  {
    serviceTitle: 'Demolition & Removal',
    serviceDescription: 'Safe removal of homes, sheds, fencing, and other structures. Includes waste disposal and thorough site clean-up.',
    imageUrl: '../assets/service_demolition.jpg',
  },
  {
    serviceTitle: 'Professional Advice',
    serviceDescription: 'Sound advice on all aspects of land contouring, clearing, mulching, re-grassing, and excavation projects—big or small.',
    imageUrl: '../assets/service_4_tractor.jpg',
  }
] as const satisfies TService[];
