import { Component, input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'app-card-header',
  imports: [MatToolbarModule, Button],
  templateUrl: './card-header.html',
  styleUrl: './card-header.scss'
})
export class CardHeader {

  index=input.required<number>()
  question=input.required<string>()
  type=input.required<"text"|"radio"|"checkbox">()
}
