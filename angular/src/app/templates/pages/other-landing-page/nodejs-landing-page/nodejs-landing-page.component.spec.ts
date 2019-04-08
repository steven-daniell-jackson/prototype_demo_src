import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsLandingPageComponent } from './nodejs-landing-page.component';

describe('NodejsLandingPageComponent', () => {
  let component: NodejsLandingPageComponent;
  let fixture: ComponentFixture<NodejsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
