import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendtransactionsComponent } from './sendtransactions.component';

describe('SendtransactionsComponent', () => {
  let component: SendtransactionsComponent;
  let fixture: ComponentFixture<SendtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
