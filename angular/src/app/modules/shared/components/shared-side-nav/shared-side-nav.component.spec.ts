import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSideNavComponent } from './shared-side-nav.component';

describe('SharedSideNavComponent', () => {
  let component: SharedSideNavComponent;
  let fixture: ComponentFixture<SharedSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
