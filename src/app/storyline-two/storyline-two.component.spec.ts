import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorylineTwoComponent } from './storyline-two.component';

describe('StorylineTwoComponent', () => {
  let component: StorylineTwoComponent;
  let fixture: ComponentFixture<StorylineTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorylineTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorylineTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
