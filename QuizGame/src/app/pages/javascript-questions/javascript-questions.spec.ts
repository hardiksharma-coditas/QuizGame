import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptQuestions } from './javascript-questions';

describe('JavascriptQuestions', () => {
  let component: JavascriptQuestions;
  let fixture: ComponentFixture<JavascriptQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
