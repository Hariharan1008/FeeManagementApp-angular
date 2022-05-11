import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeestransactionsusingidComponent } from './feestransactionsusingid.component';

describe('FeestransactionsusingidComponent', () => {
  let component: FeestransactionsusingidComponent;
  let fixture: ComponentFixture<FeestransactionsusingidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeestransactionsusingidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeestransactionsusingidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
