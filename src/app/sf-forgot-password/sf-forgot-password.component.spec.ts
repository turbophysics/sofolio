import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfForgotPasswordComponent } from './sf-forgot-password.component';

describe('SfForgotPasswordComponent', () => {
  let component: SfForgotPasswordComponent;
  let fixture: ComponentFixture<SfForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
