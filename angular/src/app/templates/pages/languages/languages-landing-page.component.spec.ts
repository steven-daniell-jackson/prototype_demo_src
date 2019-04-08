import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesLandingPageComponent } from './languages-landing-page.component';

describe('LanguagesLandingPageComponent', () => {
  let component: LanguagesLandingPageComponent;
  let fixture: ComponentFixture<LanguagesLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
