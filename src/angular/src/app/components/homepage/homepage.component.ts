import { Component, OnInit } from "@angular/core";
import { ListTodoService, TodoResponse } from "../../list.todo.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.less"],
})
export default class HomepageComponent implements OnInit {
  todos: TodoResponse[];
  completedTodos: TodoResponse[];
  constructor(private listTodoService: ListTodoService) {
    this.todos = [];
    this.completedTodos = [];
  }
  ngOnInit() {
    this.listTodoService.getAllTodos().subscribe((data: any) => {
      // console.log("data--->", data);
      const todo = data.filter((single: TodoResponse) => {
        return single.completed;
      });
      const completed = data.filter((single: TodoResponse) => {
        return !single.completed;
      });

      this.todos = todo;
      this.completedTodos = completed;
    });
  }

  trackById(index: number, todo: TodoResponse) {
    // console.log("Id==>", todo.id);
    return todo.id;
  }
}
