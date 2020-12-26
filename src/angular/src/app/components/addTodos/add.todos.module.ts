import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTodosRoutingModule } from "./add.todos-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";

import AddTodosComponent from "./add.todos.component";

@NgModule({
  imports: [
    AddTodosRoutingModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  declarations: [AddTodosComponent],
})
export class AddTodosModule {}
