import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometrainersComponent } from './hometrainers.component';

describe('HometrainersComponent', () => {
  let component: HometrainersComponent;
  let fixture: ComponentFixture<HometrainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HometrainersComponent]
    });
    fixture = TestBed.createComponent(HometrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
