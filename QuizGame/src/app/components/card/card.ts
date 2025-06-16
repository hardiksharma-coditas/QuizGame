import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardHeader } from "../card-header/card-header";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, CardHeader,MatCheckboxModule,MatRadioModule,MatInputModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  index=input.required<number>();
  questions=input.required<string>();
  type=input.required<"radio"|"text"|"checkbox">();
  options=input.required<string[]>()

}
