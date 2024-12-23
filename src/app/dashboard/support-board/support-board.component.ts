import { Component } from '@angular/core';
import {AddTicketFormComponent} from "./add-ticket-form/add-ticket-form.component";

@Component({
  selector: "app-support-board",
  standalone: true,
  imports: [AddTicketFormComponent],
  templateUrl: "./support-board.component.html",
  styleUrl: "./support-board.component.css",
})
export class SupportBoardComponent {}
