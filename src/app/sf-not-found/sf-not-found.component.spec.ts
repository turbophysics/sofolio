import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfNotFoundComponent } from './sf-not-found.component';

describe('SfNotFoundComponent', () => {
  let component: SfNotFoundComponent;
  let fixture: ComponentFixture<SfNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
