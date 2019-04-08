import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesLandingPageComponent } from './libraries-landing-page.component';

describe('LibrariesLandingPageComponent', () => {
  let component: LibrariesLandingPageComponent;
  let fixture: ComponentFixture<LibrariesLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrariesLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrariesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
