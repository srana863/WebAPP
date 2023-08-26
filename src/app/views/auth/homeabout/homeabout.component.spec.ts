import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaboutComponent } from './homeabout.component';

describe('HomeaboutComponent', () => {
  let component: HomeaboutComponent;
  let fixture: ComponentFixture<HomeaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeaboutComponent]
    });
    fixture = TestBed.createComponent(HomeaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
