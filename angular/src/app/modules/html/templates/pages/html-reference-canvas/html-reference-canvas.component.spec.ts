import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceCanvasComponent } from './html-reference-canvas.component';

describe('HtmlReferenceCanvasComponent', () => {
  let component: HtmlReferenceCanvasComponent;
  let fixture: ComponentFixture<HtmlReferenceCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
