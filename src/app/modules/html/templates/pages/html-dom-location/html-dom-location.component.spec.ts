import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomLocationComponent } from './html-dom-location.component';

describe('HtmlDomLocationComponent', () => {
  let component: HtmlDomLocationComponent;
  let fixture: ComponentFixture<HtmlDomLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
