import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateResultComponent } from './estimate-result.component';

describe('EstimateResultComponent', () => {
  let component: EstimateResultComponent;
  let fixture: ComponentFixture<EstimateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
