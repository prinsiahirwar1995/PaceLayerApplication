import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAppComponent } from './config-app.component';

describe('ConfigAppComponent', () => {
  let component: ConfigAppComponent;
  let fixture: ComponentFixture<ConfigAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
