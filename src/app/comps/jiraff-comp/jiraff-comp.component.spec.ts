import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffCompComponent } from './jiraff-comp.component';

describe('JiraffCompComponent', () => {
  let component: JiraffCompComponent;
  let fixture: ComponentFixture<JiraffCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
