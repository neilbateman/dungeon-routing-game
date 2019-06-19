import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorylineOneComponent } from './storyline-one.component';

describe('StorylineOneComponent', () => {
  let component: StorylineOneComponent;
  let fixture: ComponentFixture<StorylineOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorylineOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorylineOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
