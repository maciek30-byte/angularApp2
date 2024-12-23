import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrafficComponent } from './dashboard-traffic.component';

describe('DashboardTrafficComponent', () => {
  let component: DashboardTrafficComponent;
  let fixture: ComponentFixture<DashboardTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTrafficComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
