import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { Button } from "../../shared/button/button";
import { GetCSSQuestions } from '../../services/get-cssquestions';

@Component({
  selector: 'app-cssquestions',
  imports: [Card, Button],
  templateUrl: './cssquestions.html',
  styleUrl: './cssquestions.scss'
})
export class CSSQuestions implements OnInit{
  page:number=0
  question:any={}
  getQuestionService=inject(GetCSSQuestions)

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
}
