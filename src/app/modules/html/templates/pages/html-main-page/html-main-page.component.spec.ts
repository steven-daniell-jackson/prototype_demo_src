import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMainPageComponent } from './html-main-page.component';

describe('HtmlMainPageComponent', () => {
  let component: HtmlMainPageComponent;
  let fixture: ComponentFixture<HtmlMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
