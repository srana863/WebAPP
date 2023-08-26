import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepopularcoursesComponent } from './homepopularcourses.component';

describe('HomepopularcoursesComponent', () => {
  let component: HomepopularcoursesComponent;
  let fixture: ComponentFixture<HomepopularcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepopularcoursesComponent]
    });
    fixture = TestBed.createComponent(HomepopularcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
