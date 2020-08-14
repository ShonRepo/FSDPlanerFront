import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CheckPlanComponent } from './check-plan/check-plan.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardPlanComponent } from './card-plan/card-plan.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ToolbarPlanComponent } from './toolbar-plan/toolbar-plan.component';
import { ProjectBlockPlanComponent } from './project-block-plan/project-block-plan.component';
import { AddTodoFormPlanComponent } from './add-todo-form-plan/add-todo-form-plan.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    CheckPlanComponent,
    CardPlanComponent,
    ToolbarPlanComponent,
    ProjectBlockPlanComponent,
    AddTodoFormPlanComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
