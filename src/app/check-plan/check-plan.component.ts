import {Component, Input, OnInit} from '@angular/core';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-check-plan',
  templateUrl: './check-plan.component.html',
  styleUrls: ['./check-plan.component.scss']
})
export class CheckPlanComponent {

  @Input() Todo: Todo;
  UpdateCheck($event): void{
    const api = new ApiHelper();
    const stream$ = of(api.UpdateCheck(this.Todo.project_id, this.Todo.id));
    stream$.subscribe(value => console.log(value));
  }
}
