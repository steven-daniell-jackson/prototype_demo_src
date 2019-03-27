import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceAttributesComponent } from './html-reference-attributes.component';

describe('HtmlReferenceAttributesComponent', () => {
  let component: HtmlReferenceAttributesComponent;
  let fixture: ComponentFixture<HtmlReferenceAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
