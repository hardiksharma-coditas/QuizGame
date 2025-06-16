import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
 
  label=input.required<string|number>()
}
