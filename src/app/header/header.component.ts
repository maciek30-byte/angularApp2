import { Component } from '@angular/core';
import {ActionButtonComponent} from "../shared/action-button/action-button.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {}
