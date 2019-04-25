import { TestBed } from '@angular/core/testing';

import { GetAllContactsService } from './get-all-contacts.service';

describe('GetAllContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllContactsService = TestBed.get(GetAllContactsService);
    expect(service).toBeTruthy();
  });
});
