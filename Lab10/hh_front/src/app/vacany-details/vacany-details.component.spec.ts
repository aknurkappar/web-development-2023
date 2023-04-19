import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanyDetailsComponent } from './vacany-details.component';

describe('VacanyDetailsComponent', () => {
  let component: VacanyDetailsComponent;
  let fixture: ComponentFixture<VacanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
