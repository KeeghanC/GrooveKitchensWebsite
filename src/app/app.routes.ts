import { Routes } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**', component: HomeComponent },
];
