import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueLandingPageComponent } from './vue-landing-page.component';

describe('VueLandingPageComponent', () => {
  let component: VueLandingPageComponent;
  let fixture: ComponentFixture<VueLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
