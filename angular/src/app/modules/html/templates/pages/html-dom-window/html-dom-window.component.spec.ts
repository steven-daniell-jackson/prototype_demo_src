import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomWindowComponent } from './html-dom-window.component';

describe('HtmlDomWindowComponent', () => {
  let component: HtmlDomWindowComponent;
  let fixture: ComponentFixture<HtmlDomWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
