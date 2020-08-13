import { Component, OnInit } from '@angular/core';
import {Todo} from '../card-plan/card-plan.component';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';
import {delay, repeat, tap} from 'rxjs/operators';


export class Project {
  id: number;
  title: string;
  todos: Todo[];
}

@Component({
  selector: 'app-project-block-plan',
  templateUrl: './project-block-plan.component.html',
  styleUrls: ['./project-block-plan.component.scss']
})
export class ProjectBlockPlanComponent implements OnInit {

  constructor() { }


  project: Project;

  ngOnInit(): void {
    of({}).
    pipe(
      tap(() => { this.project = new ApiHelper().GetProject(); }),
      delay(3000),
      repeat()
    ).subscribe();

  }

}
