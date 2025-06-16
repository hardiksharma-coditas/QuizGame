import { TestBed } from '@angular/core/testing';

import { GetCSSQuestions } from './get-cssquestions';

describe('GetCSSQuestions', () => {
  let service: GetCSSQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCSSQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
