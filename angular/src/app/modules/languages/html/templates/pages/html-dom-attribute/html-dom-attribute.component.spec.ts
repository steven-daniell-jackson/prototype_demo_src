import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomAttributeComponent } from './html-dom-attribute.component';

describe('HtmlDomAttributeComponent', () => {
  let component: HtmlDomAttributeComponent;
  let fixture: ComponentFixture<HtmlDomAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
