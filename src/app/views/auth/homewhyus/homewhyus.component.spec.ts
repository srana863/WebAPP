import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewhyusComponent } from './homewhyus.component';

describe('HomewhyusComponent', () => {
  let component: HomewhyusComponent;
  let fixture: ComponentFixture<HomewhyusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomewhyusComponent]
    });
    fixture = TestBed.createComponent(HomewhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
