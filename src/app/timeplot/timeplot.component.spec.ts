import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { TimeplotComponent } from './timeplot.component';



describe('TimeplotComponent', () => {

  let component: TimeplotComponent;

  let fixture: ComponentFixture<TimeplotComponent>;



  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [ TimeplotComponent ]

    })

    .compileComponents();

  }));



  beforeEach(() => {

    fixture = TestBed.createComponent(TimeplotComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

});