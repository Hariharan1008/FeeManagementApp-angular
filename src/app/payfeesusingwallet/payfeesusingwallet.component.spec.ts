import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfeesusingwalletComponent } from './payfeesusingwallet.component';

describe('PayfeesusingwalletComponent', () => {
  let component: PayfeesusingwalletComponent;
  let fixture: ComponentFixture<PayfeesusingwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayfeesusingwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfeesusingwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
