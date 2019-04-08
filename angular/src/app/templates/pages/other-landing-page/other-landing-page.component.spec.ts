import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLandingPageComponent } from './other-landing-page.component';

describe('OtherLandingPageComponent', () => {
  let component: OtherLandingPageComponent;
  let fixture: ComponentFixture<OtherLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
