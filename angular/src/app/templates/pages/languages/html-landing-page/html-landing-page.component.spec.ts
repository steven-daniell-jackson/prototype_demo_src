import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLandingPageComponent } from './html-landing-page.component';

describe('HtmlLandingPageComponent', () => {
  let component: HtmlLandingPageComponent;
  let fixture: ComponentFixture<HtmlLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
