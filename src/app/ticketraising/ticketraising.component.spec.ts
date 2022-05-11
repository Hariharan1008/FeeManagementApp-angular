import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketraisingComponent } from './ticketraising.component';

describe('TicketraisingComponent', () => {
  let component: TicketraisingComponent;
  let fixture: ComponentFixture<TicketraisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketraisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketraisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
