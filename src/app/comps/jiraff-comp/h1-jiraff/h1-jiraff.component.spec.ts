import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1JiraffComponent } from './h1-jiraff.component';

describe('H1JiraffComponent', () => {
  let component: H1JiraffComponent;
  let fixture: ComponentFixture<H1JiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1JiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1JiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
