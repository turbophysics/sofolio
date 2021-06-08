import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfOtherBubbleComponent } from './sf-other-bubble.component';

describe('SfOtherBubbleComponent', () => {
  let component: SfOtherBubbleComponent;
  let fixture: ComponentFixture<SfOtherBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfOtherBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfOtherBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
