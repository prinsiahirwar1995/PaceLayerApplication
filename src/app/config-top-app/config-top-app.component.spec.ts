import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTopAppComponent } from './config-top-app.component';

describe('ConfigTopAppComponent', () => {
  let component: ConfigTopAppComponent;
  let fixture: ComponentFixture<ConfigTopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
