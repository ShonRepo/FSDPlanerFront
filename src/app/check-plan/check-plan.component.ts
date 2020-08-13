import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../card-plan/card-plan.component';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';

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
  UpdateCheck($event): void{
    const api = new ApiHelper();
    const stream$ = of(api.UpdateCheck(this.Todo.project_id, this.Todo.id));
    stream$.subscribe(value => console.log(value));
  }

}
