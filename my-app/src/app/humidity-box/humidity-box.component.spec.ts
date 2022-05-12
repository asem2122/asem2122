import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityBoxComponent } from './humidity-box.component';

describe('HumidityBoxComponent', () => {
  let component: HumidityBoxComponent;
  let fixture: ComponentFixture<HumidityBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
