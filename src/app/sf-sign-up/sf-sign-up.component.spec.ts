import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfSignUpComponent } from './sf-sign-up.component';

describe('SfSignUpComponent', () => {
  let component: SfSignUpComponent;
  let fixture: ComponentFixture<SfSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
