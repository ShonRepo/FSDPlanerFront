import { Component, OnInit } from '@angular/core';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';
import {delay, repeat, tap} from 'rxjs/operators';
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
