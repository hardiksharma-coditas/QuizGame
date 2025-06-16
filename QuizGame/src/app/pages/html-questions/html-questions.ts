import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { GetHTMLQues } from '../../services/get-htmlques';
import { Button } from "../../shared/button/button";
// import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-html-questions',
  imports: [Card, Button],
  templateUrl: './html-questions.html',
  styleUrl: './html-questions.scss'
})
export class HtmlQuestions implements OnInit{

  page:number=0
  question:any={}
  getQuestionService=inject(GetHTMLQues)

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
