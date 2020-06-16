import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRabComponent } from './footer-rab.component';

describe('FooterRabComponent', () => {
  let component: FooterRabComponent;
  let fixture: ComponentFixture<FooterRabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
