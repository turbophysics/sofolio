import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfNewPostComponent } from './sf-new-post.component';

describe('SfNewPostComponent', () => {
  let component: SfNewPostComponent;
  let fixture: ComponentFixture<SfNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
