import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfPostBubbleComponent } from './sf-post-bubble.component';

describe('SfPostBubbleComponent', () => {
  let component: SfPostBubbleComponent;
  let fixture: ComponentFixture<SfPostBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfPostBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfPostBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
