import { TestBed } from '@angular/core/testing';
import { DashboardServerStatusComponent } from './dashboard-server-status.component';
describe('DashboardServerStatusComponent', () => {
    let component;
    let fixture;
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
//# sourceMappingURL=dashboard-server-status.component.spec.js.map