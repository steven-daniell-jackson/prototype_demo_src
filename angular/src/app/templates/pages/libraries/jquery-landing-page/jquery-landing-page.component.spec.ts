import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryLandingPageComponent } from './jquery-landing-page.component';

describe('JqueryLandingPageComponent', () => {
  let component: JqueryLandingPageComponent;
  let fixture: ComponentFixture<JqueryLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
