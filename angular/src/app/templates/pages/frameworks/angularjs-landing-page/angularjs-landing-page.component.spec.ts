import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsLandingPageComponent } from './angularjs-landing-page.component';

describe('AngularjsLandingPageComponent', () => {
  let component: AngularjsLandingPageComponent;
  let fixture: ComponentFixture<AngularjsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularjsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularjsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
