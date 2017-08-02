import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { WebService } from './web.service';

describe('WebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [WebService]
    });
  });

  it('should be created', inject([WebService], (service: WebService) => {
    expect(service).toBeTruthy();
  }));
});
