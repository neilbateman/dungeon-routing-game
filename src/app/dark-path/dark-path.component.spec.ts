import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkPathComponent } from './dark-path.component';

describe('DarkPathComponent', () => {
  let component: DarkPathComponent;
  let fixture: ComponentFixture<DarkPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
