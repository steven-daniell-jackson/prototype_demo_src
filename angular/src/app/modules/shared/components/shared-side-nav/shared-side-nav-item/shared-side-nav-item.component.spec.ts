import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSideNavItemComponent } from './shared-side-nav-item.component';

describe('SharedSideNavItemComponent', () => {
  let component: SharedSideNavItemComponent;
  let fixture: ComponentFixture<SharedSideNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSideNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
