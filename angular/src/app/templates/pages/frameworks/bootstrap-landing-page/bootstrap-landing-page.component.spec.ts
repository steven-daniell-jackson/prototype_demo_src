import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapLandingPageComponent } from './bootstrap-landing-page.component';

describe('BootstrapLandingPageComponent', () => {
  let component: BootstrapLandingPageComponent;
  let fixture: ComponentFixture<BootstrapLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
