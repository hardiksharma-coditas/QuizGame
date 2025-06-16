import { Injectable } from '@angular/core';
import { idText } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class GetJavascriptQuestions {

  constructor() { }
  questions = [
    {
      id: 1,
      question: "What does JS stand for?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 2,
      question: "Which function is used to print something in the console?",
      responseType: "radio",
      options: [
        "console.log()",
        "print()",
        "console.print()",
        "log()"
      ],
      saved: false
    },
    {
      id: 3,
      question: "Which of the following are JavaScript data types?",
      responseType: "checkbox",
      options: [
        "String",
        "Number",
        "Boolean",
        "Object",
        "Array",
        "Function"
      ],
      saved: false
    },
    {
      id: 4,
      question: "What is a JavaScript closure?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 5,
      question: "Which method is used to add an element at the end of an array?",
      responseType: "radio",
      options: [
        "push()",
        "append()",
        "add()",
        "insert()",
      ],
      saved: false
    }
  ]

  saveQuestion(quesId: number) {
    const question = this.questions.find((ques) => ques.id == quesId)

    if (question) {
      question.saved = true
    }
  }

  getQuestion(index: number) {
    return this.questions[index]
  }
}
