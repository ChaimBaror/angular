import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabittCompComponent } from './rabitt-comp.component';

describe('RabittCompComponent', () => {
  let component: RabittCompComponent;
  let fixture: ComponentFixture<RabittCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabittCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabittCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
