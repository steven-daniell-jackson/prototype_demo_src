import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomStyleComponent } from './html-dom-style.component';

describe('HtmlDomStyleComponent', () => {
  let component: HtmlDomStyleComponent;
  let fixture: ComponentFixture<HtmlDomStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
