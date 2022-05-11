import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoneytowalletComponent } from './addmoneytowallet.component';

describe('AddmoneytowalletComponent', () => {
  let component: AddmoneytowalletComponent;
  let fixture: ComponentFixture<AddmoneytowalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoneytowalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoneytowalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
