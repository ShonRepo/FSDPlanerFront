import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../project-block-plan/project-block-plan.component';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';


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


  project: Project;


  ngOnInit(): void {
    const stream$ = of(new ApiHelper().GetProject());
    stream$.subscribe(value => this.project = value);
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
    if (this.myFirstReactiveForm.value.project === 'new'){
      of(new ApiHelper().AddTodoAndCreateProject(this.myFirstReactiveForm.value.text,
        this.myFirstReactiveForm.value.title)).subscribe(value =>  console.log('add'));
    }
    else{
      of(new ApiHelper().AddTodo(this.myFirstReactiveForm.value.text,
        this.myFirstReactiveForm.value.project.id)).subscribe(value =>  console.log('add'));
    }
    this.dialogRef.close('end!' );
  }

}
