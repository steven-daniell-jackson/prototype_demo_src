import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomNavigatorComponent } from './html-dom-navigator.component';

describe('HtmlDomNavigatorComponent', () => {
  let component: HtmlDomNavigatorComponent;
  let fixture: ComponentFixture<HtmlDomNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
