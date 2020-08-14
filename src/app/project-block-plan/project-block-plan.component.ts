import { Component } from '@angular/core';
import { repeat } from 'rxjs/operators';
import {Project} from '../model/project';
import {plainToClass} from 'class-transformer';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-project-block-plan',
  templateUrl: './project-block-plan.component.html',
  styleUrls: ['./project-block-plan.component.scss']
})
export class ProjectBlockPlanComponent{
  project: Project;

  constructor(http: HttpService) {
    http.GetProject().pipe(
      repeat()
    ).subscribe(value =>
    {this.project = plainToClass(Project, value); });
  }
  trackByFn(index, item): number {
    return item.id;
  }
}
