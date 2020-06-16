import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1RabComponent } from './h1-rab.component';

describe('H1RabComponent', () => {
  let component: H1RabComponent;
  let fixture: ComponentFixture<H1RabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1RabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1RabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
