import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CssComponentsLandingPageComponent } from "./css-components-landing-page.component";

describe("CssComponentsLandingPageComponent", () => {
  let component: CssComponentsLandingPageComponent;
  let fixture: ComponentFixture<CssComponentsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CssComponentsLandingPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssComponentsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
