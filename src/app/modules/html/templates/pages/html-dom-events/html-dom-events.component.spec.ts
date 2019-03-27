import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomEventsComponent } from './html-dom-events.component';

describe('HtmlDomEventsComponent', () => {
  let component: HtmlDomEventsComponent;
  let fixture: ComponentFixture<HtmlDomEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
