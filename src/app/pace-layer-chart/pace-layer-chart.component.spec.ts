import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceLayerChartComponent } from './pace-layer-chart.component';

describe('PaceLayerChartComponent', () => {
  let component: PaceLayerChartComponent;
  let fixture: ComponentFixture<PaceLayerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceLayerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceLayerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
