import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pdv } from "./features/pdv/pdv";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pdv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clinina-sistema-front-end');
}
