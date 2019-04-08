import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceColorsComponent } from './html-reference-colors.component';

describe('HtmlReferenceColorsComponent', () => {
  let component: HtmlReferenceColorsComponent;
  let fixture: ComponentFixture<HtmlReferenceColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
