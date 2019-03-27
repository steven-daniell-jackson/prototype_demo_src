import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomEventObjectsComponent } from './html-dom-event-objects.component';

describe('HtmlDomEventObjectsComponent', () => {
  let component: HtmlDomEventObjectsComponent;
  let fixture: ComponentFixture<HtmlDomEventObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomEventObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomEventObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
