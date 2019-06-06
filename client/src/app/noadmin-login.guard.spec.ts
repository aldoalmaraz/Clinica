import { TestBed, async, inject } from '@angular/core/testing';

import { NoadminLoginGuard } from './noadmin-login.guard';

describe('NoadminLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoadminLoginGuard]
    });
  });

  it('should ...', inject([NoadminLoginGuard], (guard: NoadminLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
