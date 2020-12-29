import { Component, OnInit } from "@angular/core";
import { ListTodoService, TodoResponse } from "../../list.todo.service";
import { DeleteTodoService } from "./delete.todo.service";
import { SetupDummyDataService } from "./setup.dummy.data.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.less"],
  providers: [DeleteTodoService, SetupDummyDataService],
})
export default class HomepageComponent implements OnInit {
  todos: TodoResponse[];
  completedTodos: TodoResponse[];

  constructor(
    private listTodoService: ListTodoService,
    private deleteTodoService: DeleteTodoService,
    private setupDummyDataService: SetupDummyDataService
  ) {
    this.todos = [];
    this.completedTodos = [];
  }

  ngOnInit() {
    this.getAllTodos();
  }

  private getAllTodos(): void {
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

  deleteAllTodos(): void {
    this.deleteTodoService.deleteAllTodos().subscribe(() => {
      this.todos = [];
      this.completedTodos = [];
    });
  }

  setupDummyData(): void {
    this.setupDummyDataService.setupDummyData().subscribe(() => {
      this.getAllTodos();
    });
  }
}
