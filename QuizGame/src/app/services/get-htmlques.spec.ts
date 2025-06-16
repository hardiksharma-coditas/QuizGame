import { TestBed } from '@angular/core/testing';

import { GetHTMLQues } from './get-htmlques';

describe('GetHTMLQues', () => {
  let service: GetHTMLQues;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHTMLQues);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
