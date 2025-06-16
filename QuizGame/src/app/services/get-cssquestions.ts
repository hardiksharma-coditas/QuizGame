import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCSSQuestions {

  constructor() { }

  questions=[
    {
      question:"What does CSS stand for?",
      responseType:"text",
      options:null
    },
    {
      question:"Which CSS property is used to change the text color?",
      responseType:"radio",
      options:[
        "color",
        "text-color",
        "font-color",
        "text-style"
      ]
    },
    {
      question:"Which of the following are valid CSS selectors?",
      responseType:"checkbox",
      options:[
        ".class",
        "#id",
        "element",
        "[attribute]",
        "*",
        ":hover"
      ]
    },
    {
      question:"What is the CSS box model?",
      responseType:"text",
      options:null
    },
    {
      question:"Which CSS property is used to create space between elements?",
      responseType:"radio",
      options:[
        "margin",
        "padding",
        "border",
        "spacing",
      ]
    }
  ]

  getQuestion(index:number){
    return this.questions[index]
  }
}
