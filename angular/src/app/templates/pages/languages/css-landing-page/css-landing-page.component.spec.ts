import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLandingPageComponent } from './css-landing-page.component';

describe('CssLandingPageComponent', () => {
  let component: CssLandingPageComponent;
  let fixture: ComponentFixture<CssLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
