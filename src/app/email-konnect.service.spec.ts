import { TestBed } from '@angular/core/testing';

import { EmailKonnectService } from './email-konnect.service';

describe('EmailKonnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailKonnectService = TestBed.get(EmailKonnectService);
    expect(service).toBeTruthy();
  });
});
