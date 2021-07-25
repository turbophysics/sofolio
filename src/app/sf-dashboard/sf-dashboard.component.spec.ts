import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfDashboardComponent } from './sf-dashboard.component';

describe('SfDashboardComponent', () => {
  let component: SfDashboardComponent;
  let fixture: ComponentFixture<SfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
