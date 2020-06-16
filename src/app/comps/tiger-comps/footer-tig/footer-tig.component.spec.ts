import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTigComponent } from './footer-tig.component';

describe('FooterTigComponent', () => {
  let component: FooterTigComponent;
  let fixture: ComponentFixture<FooterTigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
