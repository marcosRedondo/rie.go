import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemperatureComponent } from './table-temperature.component';

describe('TableTemperatureComponent', () => {
  let component: TableTemperatureComponent;
  let fixture: ComponentFixture<TableTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
