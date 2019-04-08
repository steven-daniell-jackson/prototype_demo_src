import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceEventsComponent } from './html-reference-events.component';

describe('HtmlReferenceEventsComponent', () => {
  let component: HtmlReferenceEventsComponent;
  let fixture: ComponentFixture<HtmlReferenceEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
