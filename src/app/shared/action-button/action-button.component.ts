import { Component, input } from "@angular/core";

interface ButtonConfig {
  tittle: string;
  onClick: (...args: unknown[]) => void;
}

@Component({
  selector: "app-action-button",
  standalone: true,
  imports: [],
  templateUrl: "./action-button.component.html",
  styleUrl: "./action-button.component.css",
})
export class ActionButtonComponent {}
