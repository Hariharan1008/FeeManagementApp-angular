import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdetailsusingidComponent } from './ticketdetailsusingid.component';

describe('TicketdetailsusingidComponent', () => {
  let component: TicketdetailsusingidComponent;
  let fixture: ComponentFixture<TicketdetailsusingidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketdetailsusingidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdetailsusingidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
