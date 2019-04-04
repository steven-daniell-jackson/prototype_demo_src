import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCardBlocksComponent } from './homepage-card-blocks.component';

describe('HomepageCardBlocksComponent', () => {
  let component: HomepageCardBlocksComponent;
  let fixture: ComponentFixture<HomepageCardBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageCardBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCardBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
