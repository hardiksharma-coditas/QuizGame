import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetHTMLQues {

  constructor() { }

  questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 2,
      question: "Which tag is used to create a hyperlink?",
      responseType: "radio",
      options: [
        "<a>",
        "<link>",
        "<href>",
        "<url>"
      ],
      saved: false
    },
    {
      id: 3,
      question: "Which of the following are valid HTML5 semantic elements?",
      responseType: "checkbox",
      options: [
        "<article>",
        "<section>",
        "<header>",
        "<main>",
        "<div>",
        "<span>"
      ],
      saved: false
    },
    {
      id: 4,
      question: "What is the purpose of the <meta> tag?",
      responseType: "text",
      options: null,
      saved: false
    },
    {
      id: 5,
      question: "Which attribute is used to define inline styles?",
      responseType: "radio",
      options: [
        "style",
        "class",
        "id",
        "font",
      ],
      saved: false
    }
  ]

  saveQuestion(quesId: number) {
    const question = this.questions.find((ques) => ques.id == quesId)
    console.log(question)
    if (question) {
      question.saved = true
    }
  }

  getQuestion(index: number) {
    return this.questions[index]
  }
}
