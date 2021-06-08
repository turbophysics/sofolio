import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfNewsBubbleComponent } from './sf-news-bubble.component';

describe('SfNewsBubbleComponent', () => {
  let component: SfNewsBubbleComponent;
  let fixture: ComponentFixture<SfNewsBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfNewsBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfNewsBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
