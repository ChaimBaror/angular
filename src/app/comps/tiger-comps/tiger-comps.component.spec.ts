import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerCompsComponent } from './tiger-comps.component';

describe('TigerCompsComponent', () => {
  let component: TigerCompsComponent;
  let fixture: ComponentFixture<TigerCompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigerCompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
