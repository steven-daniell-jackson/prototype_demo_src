import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomElementComponent } from './html-dom-element.component';

describe('HtmlDomElementComponent', () => {
  let component: HtmlDomElementComponent;
  let fixture: ComponentFixture<HtmlDomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
