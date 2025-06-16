import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { GetHTMLQues } from '../../services/get-htmlques';
import { Button } from "../../shared/button/button";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-html-questions',
  imports: [Card, Button,MatProgressBarModule,ReactiveFormsModule],
  templateUrl: './html-questions.html',
  styleUrl: './html-questions.scss'
})
export class HtmlQuestions implements OnInit{

  page:number=0
  question:any={}
  getQuestionService=inject(GetHTMLQues)
  saveCount:number=0

  htmlQuesAnswers:FormGroup=new FormGroup({})

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

   handleSave(id:number){
   ++this.saveCount
   this.getQuestionService.saveQuestion(id)
   this.getQuestionService.getQuestion(this.page)
   }
}
