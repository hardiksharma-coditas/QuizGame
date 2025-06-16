import { Component, EventEmitter, input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardHeader } from "../card-header/card-header";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { Button } from "../../shared/button/button";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, CardHeader, MatCheckboxModule, MatRadioModule, MatInputModule, Button,ReactiveFormsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  index=input.required<number>();
  questions=input.required<string>();
  type=input.required<"radio"|"text"|"checkbox">();
  options=input.required<string[]>()
  isSaved=input.required<boolean>()
  id=input.required<number>()
  
  @Output() onsave=new EventEmitter()

  saved:boolean=false
  saveCount:number=0

  // checkBox=new FormControl('')
  // radio=new FormControl('')
  answer=new FormControl('')

  onSave(id:number){
    this.saved=true
    ++this.saveCount

    this.onsave.emit(id)
  }

}
