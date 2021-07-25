import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfVerifyEmailComponent } from './sf-verify-email.component';

describe('SfVerifyEmailComponent', () => {
  let component: SfVerifyEmailComponent;
  let fixture: ComponentFixture<SfVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfVerifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
