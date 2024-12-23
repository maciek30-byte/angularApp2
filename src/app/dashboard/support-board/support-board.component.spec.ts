import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBoardComponent } from './support-board.component';

describe('SupportBoardComponent', () => {
  let component: SupportBoardComponent;
  let fixture: ComponentFixture<SupportBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
