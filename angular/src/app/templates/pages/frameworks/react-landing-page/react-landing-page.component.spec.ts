import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactLandingPageComponent } from './react-landing-page.component';

describe('ReactLandingPageComponent', () => {
  let component: ReactLandingPageComponent;
  let fixture: ComponentFixture<ReactLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
