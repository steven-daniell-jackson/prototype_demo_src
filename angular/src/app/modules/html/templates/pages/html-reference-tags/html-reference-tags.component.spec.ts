import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceTagsComponent } from './html-reference-tags.component';

describe('HtmlReferenceTagsComponent', () => {
  let component: HtmlReferenceTagsComponent;
  let fixture: ComponentFixture<HtmlReferenceTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
