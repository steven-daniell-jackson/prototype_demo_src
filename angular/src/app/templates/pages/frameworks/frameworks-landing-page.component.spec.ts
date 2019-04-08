import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksLandingPageComponent } from './frameworks-landing-page.component';

describe('FrameworksLandingPageComponent', () => {
  let component: FrameworksLandingPageComponent;
  let fixture: ComponentFixture<FrameworksLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
