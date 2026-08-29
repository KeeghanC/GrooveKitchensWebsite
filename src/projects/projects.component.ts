import { Component } from '@angular/core';
import { completedProjects, projects } from './projects.consts';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly completedProjects = completedProjects;
  readonly projects = projects;
}
