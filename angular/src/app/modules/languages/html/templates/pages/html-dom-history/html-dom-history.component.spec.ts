import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomHistoryComponent } from './html-dom-history.component';

describe('HtmlDomHistoryComponent', () => {
  let component: HtmlDomHistoryComponent;
  let fixture: ComponentFixture<HtmlDomHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
