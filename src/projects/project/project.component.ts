import { Component, Input } from '@angular/core';
import { TProject } from '../project.type';

const defaultProject: TProject = {
  title: 'Default Project Title',
  description: 'Default Project Description',
};

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) project = defaultProject;
}
