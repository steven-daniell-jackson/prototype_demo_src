import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomGeolocationComponent } from './html-dom-geolocation.component';

describe('HtmlDomGeolocationComponent', () => {
  let component: HtmlDomGeolocationComponent;
  let fixture: ComponentFixture<HtmlDomGeolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomGeolocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
