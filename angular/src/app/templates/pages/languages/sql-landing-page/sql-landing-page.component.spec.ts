import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlLandingPageComponent } from './sql-landing-page.component';

describe('SqlLandingPageComponent', () => {
  let component: SqlLandingPageComponent;
  let fixture: ComponentFixture<SqlLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
