import { Component } from '@angular/core';
import { certificatesAndCompliances } from '../constants/compliance-and-certificates.consts';
import { missionStatement } from '../constants/mission-statement.const';

@Component({
    selector: 'app-about-us',
    imports: [],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
 certificatesAndCompliances = certificatesAndCompliances

 missionStatement = missionStatement;
}
