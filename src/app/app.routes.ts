import { Routes } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Groove Kitchens | Custom Kitchens & Renovations Auckland',
      description:
        'Custom kitchens, renovations, facelifts, and laundry makeovers from Groove Kitchens in Auckland.',
    },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Kitchen & Laundry Services | Groove Kitchens Auckland',
      description:
        'Explore custom kitchen design, making, installation, renovations, facelifts, cabinetry, and laundry makeover services from Groove Kitchens.',
    },
  },
  {
    path: 'kitchen-inspiration',
    component: ProjectsComponent,
    data: {
      title: 'Kitchen Inspiration | Groove Kitchens Auckland',
      description:
        'Browse kitchen inspiration for practical layouts, considered materials, and beautiful storage solutions.',
    },
  },
  {
    path: 'projects',
    redirectTo: 'kitchen-inspiration',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutUsComponent,
    data: {
      title: 'About Groove Kitchens | Auckland Kitchen Designers',
      description:
        'Meet Groove Kitchens: more than 30 years of experience creating practical, personal kitchens across Auckland.',
    },
  },
  {
    path: 'contact',
    component: ContactusComponent,
    data: {
      title: 'Contact Groove Kitchens | Start Your Kitchen Project',
      description:
        'Contact Groove Kitchens to discuss your new kitchen, renovation, facelift, cabinetry, or laundry makeover in Auckland.',
    },
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    data: {
      title: 'Groove Kitchens Testimonials | Auckland',
      description:
        'Read what Groove Kitchens customers say about their kitchen design and renovation experience.',
    },
  },
  { path: '**', component: HomeComponent },
];
