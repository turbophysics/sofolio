import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfSignInComponent } from './sf-sign-in.component';

describe('SfSignInComponent', () => {
  let component: SfSignInComponent;
  let fixture: ComponentFixture<SfSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
