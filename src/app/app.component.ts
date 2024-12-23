import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {DashboardServerStatusComponent} from "./dashboard/dashboard-server-status/dashboard-server-status.component";
import {DashboardTrafficComponent} from "./dashboard/dashboard-traffic/dashboard-traffic.component";
import {SupportBoardComponent} from "./dashboard/support-board/support-board.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [
    HeaderComponent,
    DashboardServerStatusComponent,
    DashboardTrafficComponent,
    SupportBoardComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  currentStatus = "online";
}
