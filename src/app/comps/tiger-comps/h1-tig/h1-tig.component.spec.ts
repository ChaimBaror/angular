import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1TigComponent } from './h1-tig.component';

describe('H1TigComponent', () => {
  let component: H1TigComponent;
  let fixture: ComponentFixture<H1TigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1TigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1TigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
