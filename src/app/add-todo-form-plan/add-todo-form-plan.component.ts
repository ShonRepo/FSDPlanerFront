import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiHelper} from '../api/api.helper';
import {of} from 'rxjs';
import {Project} from '../model/project';


@Component({
  selector: 'app-add-todo-form-plan',
  templateUrl: './add-todo-form-plan.component.html',
  styleUrls: ['./add-todo-form-plan.component.scss']
})
export class AddTodoFormPlanComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddTodoFormPlanComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  AddReactiveForm: FormGroup;
  project: Project;

  ngOnInit(): void {
    const stream$ = of(new ApiHelper().GetProject());
    stream$.subscribe(value => this.project = value);
    this.initForm();
  }

  closeDialog(): void {
    this.dialogRef.close('end!' );
  }

  initForm(): void{
    this.AddReactiveForm = this.fb.group({
      title: [null, [Validators.pattern(/^.{0,30}$/)]],
      text: [null, [Validators.required, Validators.pattern(/^.{1,30}$/)]],
      project: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    const controls = this.AddReactiveForm.controls;
    if (this.AddReactiveForm.invalid) {

      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    if (this.AddReactiveForm.value.project === 'new'){
      of(new ApiHelper().AddTodoAndCreateProject(this.AddReactiveForm.value.text,
        this.AddReactiveForm.value.title)).subscribe(value =>  console.log('add'));
    }
    else{
      of(new ApiHelper().AddTodo(this.AddReactiveForm.value.text,
        this.AddReactiveForm.value.project.id)).subscribe(value =>  console.log('add'));
    }
    this.dialogRef.close('end!' );
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
