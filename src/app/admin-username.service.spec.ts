import { TestBed } from '@angular/core/testing';

import { AdminUsernameService } from './admin-username.service';

describe('AdminUsernameService', () => {
  let service: AdminUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
