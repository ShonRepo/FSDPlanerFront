import { Component, OnInit } from '@angular/core';
import {AddTodoFormPlanComponent} from '../add-todo-form-plan/add-todo-form-plan.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar-plan',
  templateUrl: './toolbar-plan.component.html',
  styleUrls: ['./toolbar-plan.component.scss']
})
export class ToolbarPlanComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTodoFormPlanComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
