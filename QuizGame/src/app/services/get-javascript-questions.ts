import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetJavascriptQuestions {

  constructor() { }
  questions=[
    {
      question:"What does JS stand for?",
      responseType:"text",
      options:null
    },
    {
      question:"Which function is used to print something in the console?",
      responseType:"radio",
      options:[
        "console.log()",
        "print()",
        "console.print()",
        "log()"
      ]
    },
    {
      question:"Which of the following are JavaScript data types?",
      responseType:"checkbox",
      options:[
        "String",
        "Number",
        "Boolean",
        "Object",
        "Array",
        "Function"
      ]
    },
    {
      question:"What is a JavaScript closure?",
      responseType:"text",
      options:null
    },
    {
      question:"Which method is used to add an element at the end of an array?",
      responseType:"radio",
      options:[
        "push()",
        "append()",
        "add()",
        "insert()",
      ]
    }
  ]

  getQuestion(index:number){
    return this.questions[index]
  }
}
