import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServerStatusComponent } from './dashboard-server-status.component';

describe('DashboardServerStatusComponent', () => {
  let component: DashboardServerStatusComponent;
  let fixture: ComponentFixture<DashboardServerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
