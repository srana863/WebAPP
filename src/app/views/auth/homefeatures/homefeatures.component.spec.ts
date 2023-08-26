import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefeaturesComponent } from './homefeatures.component';

describe('HomefeaturesComponent', () => {
  let component: HomefeaturesComponent;
  let fixture: ComponentFixture<HomefeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomefeaturesComponent]
    });
    fixture = TestBed.createComponent(HomefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
