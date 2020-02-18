import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBusinessProcessApplicationComponent } from './map-business-process-application.component';

describe('MapBusinessProcessApplicationComponent', () => {
  let component: MapBusinessProcessApplicationComponent;
  let fixture: ComponentFixture<MapBusinessProcessApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBusinessProcessApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBusinessProcessApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
