import {Component, input} from '@angular/core';
import {ActionButtonComponent} from "../../../shared/action-button/action-button.component";
import {FormsModule} from "@angular/forms";
import {ControlComponent} from "../../../shared/control/control.component";
import {TicketServiceService} from "../ticket-service.service";

@Component({
  selector: "app-add-ticket-form",
  standalone: true,
  imports: [ActionButtonComponent, FormsModule, ControlComponent],
  templateUrl: "./add-ticket-form.component.html",
  styleUrl: "./add-ticket-form.component.css",
})
export class AddTicketFormComponent {
 enteredTittle = ""
  enteredRequest = ""

  constructor(private readonly ticketsService: TicketServiceService) {}

  onSubmit(form:HTMLFormElement){
   this.ticketsService.addTicket({
      id:Math.random().toString(36).substring(2),
      title: this.enteredTittle,
      request: this.enteredRequest,
      status:"open"
    })
    form.reset()
  }
}
