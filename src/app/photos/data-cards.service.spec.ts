import { TestBed, inject } from '@angular/core/testing';

import { DataCardsService } from './data-cards.service';

describe('DataCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCardsService]
    });
  });

  it('should be created', inject([DataCardsService], (service: DataCardsService) => {
    expect(service).toBeTruthy();
  }));
});
