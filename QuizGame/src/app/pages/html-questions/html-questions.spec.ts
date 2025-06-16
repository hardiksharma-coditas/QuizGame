import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlQuestions } from './html-questions';

describe('HtmlQuestions', () => {
  let component: HtmlQuestions;
  let fixture: ComponentFixture<HtmlQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
