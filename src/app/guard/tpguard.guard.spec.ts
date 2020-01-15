import { TestBed, async, inject } from '@angular/core/testing';

import { TpguardGuard } from './tpguard.guard';

describe('TpguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TpguardGuard]
    });
  });

  it('should ...', inject([TpguardGuard], (guard: TpguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
