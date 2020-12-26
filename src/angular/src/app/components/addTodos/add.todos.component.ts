import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppSharedService } from "../../app.shared.service";
import { AddTodoService, TodoResponse } from "./add.todo.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "add-todos",
  templateUrl: "./add.todos.component.html",
  styleUrls: ["./add.todos.component.less"],
  providers: [AddTodoService],
})
export default class AddTodosComponent {
  todoForm = new FormGroup({
    completed: new FormControl(false),
    title: new FormControl("", Validators.required),
  });

  savedData: TodoResponse | undefined;

  constructor(
    private router: Router,
    private appSharedService: AppSharedService,
    private addTodoService: AddTodoService
  ) {}

  cancelAddTodo() {
    this.router.navigate(["showTodos"]);
    this.appSharedService.setSelectedTab(1);
  }

  onSubmit() {
    const { title, completed } = this.todoForm.value;
    this.addTodoService
      .addTodo({
        userId: 1,
        title: title,
        completed: completed,
      })
      .subscribe((response) => {
        console.log("response-->", response);
        this.savedData = response;
      });
  }
}
