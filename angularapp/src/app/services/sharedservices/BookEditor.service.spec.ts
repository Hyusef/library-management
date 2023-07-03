import { TestBed } from '@angular/core/testing';

import { BookEditorService } from './BookEditor';

describe('BookEditorService', () => {
  let service: BookEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
