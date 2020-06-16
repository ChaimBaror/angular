import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiJiraffComponent } from './li-jiraff.component';

describe('LiJiraffComponent', () => {
  let component: LiJiraffComponent;
  let fixture: ComponentFixture<LiJiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiJiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiJiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
