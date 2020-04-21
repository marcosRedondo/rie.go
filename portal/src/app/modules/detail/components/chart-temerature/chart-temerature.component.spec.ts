import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTemeratureComponent } from './chart-temerature.component';

describe('ChartTemeratureComponent', () => {
  let component: ChartTemeratureComponent;
  let fixture: ComponentFixture<ChartTemeratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTemeratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTemeratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
