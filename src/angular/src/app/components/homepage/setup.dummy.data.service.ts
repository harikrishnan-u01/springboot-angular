import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SetupDummyDataService {
  constructor(private httpClient: HttpClient) {}

  setupDummyData(): Observable<String> {
    return this.httpClient.post(
      "/api/setup",
      {},
      {
        responseType: "text",
      }
    ) as Observable<String>;
  }
}
