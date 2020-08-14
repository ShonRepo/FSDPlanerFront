import { Component, OnInit } from '@angular/core';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';
import {delay, repeat, tap} from 'rxjs/operators';
import {Project} from '../model/project';
import {plainToClass} from "class-transformer";


@Component({
  selector: 'app-project-block-plan',
  templateUrl: './project-block-plan.component.html',
  styleUrls: ['./project-block-plan.component.scss']
})
export class ProjectBlockPlanComponent{
  project: Project;

  constructor() {
    of({}).
    pipe(
      tap(() => { this.project = new ApiHelper().GetProject(); }),
      delay(3000),
      repeat()
    ).subscribe();
  }
  trackByFn(index, item): number {
    return item.id;
  }
}
