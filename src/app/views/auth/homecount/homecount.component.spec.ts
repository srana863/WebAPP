import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecountComponent } from './homecount.component';

describe('HomecountComponent', () => {
  let component: HomecountComponent;
  let fixture: ComponentFixture<HomecountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecountComponent]
    });
    fixture = TestBed.createComponent(HomecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
