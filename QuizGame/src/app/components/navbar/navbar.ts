import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HtmlQuestions } from "../../pages/html-questions/html-questions";
import { CSSQuestions } from "../../pages/cssquestions/cssquestions";
import { JavascriptQuestions } from "../../pages/javascript-questions/javascript-questions";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, HtmlQuestions, CSSQuestions, JavascriptQuestions,MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

}
