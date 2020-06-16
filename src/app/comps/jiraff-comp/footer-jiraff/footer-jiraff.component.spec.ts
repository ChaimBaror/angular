import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterJiraffComponent } from './footer-jiraff.component';

describe('FooterJiraffComponent', () => {
  let component: FooterJiraffComponent;
  let fixture: ComponentFixture<FooterJiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterJiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterJiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
