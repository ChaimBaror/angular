import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlRabComponent } from './ul-rab.component';

describe('UlRabComponent', () => {
  let component: UlRabComponent;
  let fixture: ComponentFixture<UlRabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlRabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlRabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
