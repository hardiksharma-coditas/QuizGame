import { TestBed } from '@angular/core/testing';

import { GetJaascriptQuestions } from './get-jaascript-questions';

describe('GetJaascriptQuestions', () => {
  let service: GetJaascriptQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJaascriptQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
