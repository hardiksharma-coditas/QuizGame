import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetHTMLQues {

  constructor() { }

  questions=[
    {
      question:"What does HTML stand for?",
      responseType:"text",
      options:null
    },
    {
      question:"Which tag is used to create a hyperlink?",
      responseType:"radio",
      options:[
        "<a>",
        "<link>",
        "<href>",
        "<url>"
      ]
    },
    {
      question:"Which of the following are valid HTML5 semantic elements?",
      responseType:"checkbox",
      options:[
        "<article>",
        "<section>",
        "<header>",
        "<main>",
        "<div>",
        "<span>"
      ]
    },
    {
      question:"What is the purpose of the <meta> tag?",
      responseType:"text",
      options:null
    },
    {
      question:"Which attribute is used to define inline styles?",
      responseType:"radio",
      options:[
        "style",
        "class",
        "id",
        "font",
      ]
    }
  ]
  

  getQuestion(index:number){
    return this.questions[index]
  }
}
