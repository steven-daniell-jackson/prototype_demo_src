import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLandingPageComponent } from './angular-landing-page.component';

describe('AngularLandingPageComponent', () => {
  let component: AngularLandingPageComponent;
  let fixture: ComponentFixture<AngularLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
