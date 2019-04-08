import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlReferenceAudioVideoComponent } from './html-reference-audio-video.component';

describe('HtmlReferenceAudioVideoComponent', () => {
  let component: HtmlReferenceAudioVideoComponent;
  let fixture: ComponentFixture<HtmlReferenceAudioVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlReferenceAudioVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlReferenceAudioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
