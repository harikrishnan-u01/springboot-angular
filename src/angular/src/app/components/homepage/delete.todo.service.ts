import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DeleteTodoService {
  constructor(private httpClient: HttpClient) {}

  deleteAllTodos(): Observable<String> {
    return this.httpClient.delete("/api/todos", {
      responseType: "text",
    }) as Observable<String>;
  }
}
