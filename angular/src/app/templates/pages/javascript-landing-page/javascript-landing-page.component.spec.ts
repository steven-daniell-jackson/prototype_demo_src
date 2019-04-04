import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptLandingPageComponent } from './javascript-landing-page.component';

describe('JavascriptLandingPageComponent', () => {
  let component: JavascriptLandingPageComponent;
  let fixture: ComponentFixture<JavascriptLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
