import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../project-block-plan/project-block-plan.component';

@Component({
  selector: 'app-add-todo-form-plan',
  templateUrl: './add-todo-form-plan.component.html',
  styleUrls: ['./add-todo-form-plan.component.scss']
})
export class AddTodoFormPlanComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddTodoFormPlanComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}
  selectedProject: Project;

  nullProject: Project = {id: 0, title: '', todos: []};

  myFirstReactiveForm: FormGroup;

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
    this.initForm();
  }

  closeDialog(): void {
    this.dialogRef.close('end!' );
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  initForm(): void{
    this.myFirstReactiveForm = this.fb.group({
      title: [null, [Validators.pattern(/^.{0,30}$/)]],
      text: [null, [Validators.required, Validators.pattern(/^.{1,30}$/)]],
      project: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    const controls = this.myFirstReactiveForm.controls;


    if (this.myFirstReactiveForm.invalid) {

      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.myFirstReactiveForm.value);
    // this.dialogRef.close('add!' );
  }

}
