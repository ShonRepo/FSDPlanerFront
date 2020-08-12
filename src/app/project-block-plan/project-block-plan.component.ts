import { Component, OnInit } from '@angular/core';
import {Todo} from '../card-plan/card-plan.component';


export interface Project {
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
  project: Project[] =
    [
      {
        id: 1, title: 'prod 1', todos: [
          {id: 1, text: 'test 1', isCompleted: true, project_id: 2},
          {id: 2, text: 'test 2', isCompleted: false, project_id: 2},
          {id: 3, text: 'test 3', isCompleted: true, project_id: 2}
        ]
      },
      {
        id: 1, title: 'prod 2', todos: [
          {id: 1, text: 'test 1', isCompleted: true, project_id: 2},
          {id: 2, text: 'test 2', isCompleted: false, project_id: 2},
          {id: 3, text: 'test 3', isCompleted: true, project_id: 2}
        ]
      }
    ];

  ngOnInit(): void {
  }

}
