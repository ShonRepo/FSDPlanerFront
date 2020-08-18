import { Component, Input } from '@angular/core';
import {Project} from '../model/project';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.scss']
})
export class CardPlanComponent {

  @Input() project: Project;

  trackByFn(index, item): number {
    return item.id;
  }
}
