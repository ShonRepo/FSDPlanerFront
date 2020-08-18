import {Component, Input} from '@angular/core';
import {Todo} from '../model/todo';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-check-plan',
  templateUrl: './check-plan.component.html',
  styleUrls: ['./check-plan.component.scss']
})
export class CheckPlanComponent {

  constructor(private http: HttpService) {
  }
  @Input() Todo: Todo;
  UpdateCheck(): void{
    this.http.UpdateCheck(this.Todo.project_id, this.Todo.id).subscribe(value => console.log(value));
  }
}
