import {Component, effect, OnDestroy, OnInit, signal} from "@angular/core";

type ServerStatus = "offline" | "online" | "unknown"

@Component({
  selector: "app-dashboard-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-server-status.component.html",
  styleUrl: "./dashboard-server-status.component.css",
})
export class DashboardServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<ServerStatus>("unknown")
  private intervalId?: ReturnType<typeof setInterval>

  constructor() {
    effect(()=>{
      console.log("signal is changed to",this.currentStatus())
    })
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set("online")
      } else if (random < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}
