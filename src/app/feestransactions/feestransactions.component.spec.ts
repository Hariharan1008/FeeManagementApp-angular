import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeestransactionsComponent } from './feestransactions.component';

describe('FeestransactionsComponent', () => {
  let component: FeestransactionsComponent;
  let fixture: ComponentFixture<FeestransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeestransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeestransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
