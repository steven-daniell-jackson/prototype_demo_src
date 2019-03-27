import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomConsoleComponent } from './html-dom-console.component';

describe('HtmlDomConsoleComponent', () => {
  let component: HtmlDomConsoleComponent;
  let fixture: ComponentFixture<HtmlDomConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
