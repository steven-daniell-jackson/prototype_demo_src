import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomStorageComponent } from './html-dom-storage.component';

describe('HtmlDomStorageComponent', () => {
  let component: HtmlDomStorageComponent;
  let fixture: ComponentFixture<HtmlDomStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
