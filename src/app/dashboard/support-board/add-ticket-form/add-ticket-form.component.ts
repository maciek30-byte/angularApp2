import {Component, input} from '@angular/core';
import {ActionButtonComponent} from "../../../shared/action-button/action-button.component";
import {FormsModule} from "@angular/forms";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: "app-add-ticket-form",
  standalone: true,
  imports: [ActionButtonComponent, FormsModule, ControlComponent],
  templateUrl: "./add-ticket-form.component.html",
  styleUrl: "./add-ticket-form.component.css",
})
export class AddTicketFormComponent {
  title = input<string>("");
  requestContent = input<string>("");
}
