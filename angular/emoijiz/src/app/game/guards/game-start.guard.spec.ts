import { TestBed } from '@angular/core/testing';

import { GameStartGuard } from './game-start.guard';

describe('GameStartGuard', () => {
  let guard: GameStartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameStartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
