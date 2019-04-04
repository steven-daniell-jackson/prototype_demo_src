import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpLandingPageComponent } from './php-landing-page.component';

describe('PhpLandingPageComponent', () => {
  let component: PhpLandingPageComponent;
  let fixture: ComponentFixture<PhpLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
