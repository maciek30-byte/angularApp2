import {Component, inject, input, output, signal} from "@angular/core";
import { Ticket, TicketServiceService } from "../ticket-service.service";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent  {
  readonly ticketService = inject(TicketServiceService)
  ticketData = input.required<Ticket>();
  isDetailsVisible = signal(false);
  close = output()


  onToggleDetailsClick() {
    this.isDetailsVisible.update((prevState)=> !prevState)
  }

  onMarkCompleted(){
    this.close.emit()
  }
}
