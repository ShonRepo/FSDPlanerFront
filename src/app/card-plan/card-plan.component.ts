import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../project-block-plan/project-block-plan.component';


export interface Todo{
  id: number;
  text: string;
  isCompleted: boolean;
  project_id: number;
}

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.scss']
})
export class CardPlanComponent implements OnInit {


  @Input() project: Project;
  constructor() { }



  ngOnInit(): void {
  }

}
