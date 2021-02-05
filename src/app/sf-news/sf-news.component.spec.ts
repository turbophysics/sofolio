import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfNewsComponent } from './sf-news.component';

describe('SfNewsComponent', () => {
  let component: SfNewsComponent;
  let fixture: ComponentFixture<SfNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
