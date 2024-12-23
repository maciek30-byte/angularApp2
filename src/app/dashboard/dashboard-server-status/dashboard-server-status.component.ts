import {Component, OnDestroy, OnInit} from "@angular/core";

type ServerStatus = "offline" | "online" | "unknown"

@Component({
  selector: "app-dashboard-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-server-status.component.html",
  styleUrl: "./dashboard-server-status.component.css",
})
export class DashboardServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = "unknown";
  private intervalId?: ReturnType<typeof setInterval>

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus = "online";
      } else if (random < 0.9) {
        this.currentStatus = "online";
      } else {
        this.currentStatus = "unknown";
      }
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}
