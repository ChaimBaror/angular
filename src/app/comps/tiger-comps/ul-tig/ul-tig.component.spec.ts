import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlTigComponent } from './ul-tig.component';

describe('UlTigComponent', () => {
  let component: UlTigComponent;
  let fixture: ComponentFixture<UlTigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlTigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlTigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
