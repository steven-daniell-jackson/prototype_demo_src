import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomDocumentComponent } from './html-dom-document.component';

describe('HtmlDomDocumentComponent', () => {
  let component: HtmlDomDocumentComponent;
  let fixture: ComponentFixture<HtmlDomDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
