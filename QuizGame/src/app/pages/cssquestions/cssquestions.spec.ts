import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSQuestions } from './cssquestions';

describe('CSSQuestions', () => {
  let component: CSSQuestions;
  let fixture: ComponentFixture<CSSQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
