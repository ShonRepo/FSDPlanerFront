import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../card-plan/card-plan.component';

@Component({
  selector: 'app-check-plan',
  templateUrl: './check-plan.component.html',
  styleUrls: ['./check-plan.component.scss']
})
export class CheckPlanComponent implements OnInit {

  @Input() Todo: Todo;
  constructor() { }
  ngOnInit(): void {
  }

}
