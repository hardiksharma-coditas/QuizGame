import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { Button } from "../../shared/button/button";
import { GetJavascriptQuestions } from '../../services/get-javascript-questions';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-javascript-questions',
  imports: [Card, Button,MatProgressBarModule],
  templateUrl: './javascript-questions.html',
  styleUrl: './javascript-questions.scss'
})
export class JavascriptQuestions implements OnInit{

  page:number=0
  question:any={}
  getQuestionService=inject(GetJavascriptQuestions)
  saveCount:number=0

  ngOnInit(): void {
    this.question=this.getQuestionService.getQuestion(this.page)
     console.log(this.question)
  }

   getQuestions(page:number){
    this.question=this.getQuestionService.getQuestion(page)
     console.log(this.question)
   }

   moveLeft(){
   if(this.page>0){
    --this.page;
   this.getQuestions(this.page)
   }
   }

   moveRight(){

    if(this.page<4){
      ++this.page;
    this.getQuestions(this.page)
    }
   }

  handleSave(saved:number){
   ++this.saveCount
   this.getQuestionService.saveQuestion(saved)
   this.getQuestionService.getQuestion(this.page)  
   }
}
