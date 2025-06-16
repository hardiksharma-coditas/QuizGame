import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'QuizGame';
}
