import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ServicesComponent } from "../services/services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
    selector: 'app-home',
    imports: [HeroComponent, ServicesComponent, AboutUsComponent, ContactusComponent, ProjectsComponent, TestimonialsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
