import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHomepageComponent } from './demo-homepage.component';

describe('DemoHomepageComponent', () => {
  let component: DemoHomepageComponent;
  let fixture: ComponentFixture<DemoHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
