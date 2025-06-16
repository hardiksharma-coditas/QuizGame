import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCSSQuestions {

  constructor() { }

  questions = [
    {
      id: 1,
      question: "What does CSS stand for?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 2,
      question: "Which CSS property is used to change the text color?",
      responseType: "radio",
      options: [
        "color",
        "text-color",
        "font-color",
        "text-style"
      ],
      saved: false
    },
    {
      id: 3,
      question: "Which of the following are valid CSS selectors?",
      responseType: "checkbox",
      options: [
        ".class",
        "#id",
        "element",
        "[attribute]",
        "*",
        ":hover"
      ],
      saved: false
    },
    {
      id: 4,
      question: "What is the CSS box model?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 5,
      question: "Which CSS property is used to create space between elements?",
      responseType: "radio",
      options: [
        "margin",
        "padding",
        "border",
        "spacing",
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
