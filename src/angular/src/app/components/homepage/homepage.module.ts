import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageRoutingModule } from "./homepage-routing.module";
import { MatButtonModule } from "@angular/material/button";

import HomepageComponent from "./homepage.component";

@NgModule({
  imports: [CommonModule, HomepageRoutingModule, MatButtonModule],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
