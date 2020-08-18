import { Component, OnInit } from '@angular/core';
import {AddTodoFormPlanComponent} from '../add-todo-form-plan/add-todo-form-plan.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar-plan',
  templateUrl: './toolbar-plan.component.html',
  styleUrls: ['./toolbar-plan.component.scss']
})
export class ToolbarPlanComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddTodoFormPlanComponent, {
      width: '250px',
    });
  }
}
