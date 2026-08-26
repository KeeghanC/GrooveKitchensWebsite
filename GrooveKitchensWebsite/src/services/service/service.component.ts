import { Component, Input } from '@angular/core';
import { TService } from './service.type';

const defaultService: TService = {
  serviceTitle: 'Default Service Title',
  serviceDescription: 'Default Service Description'
};

@Component({
    selector: 'app-service',
    imports: [],
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss'
})
export class ServiceComponent {
  @Input({ required: true }) service: TService = defaultService;
}
