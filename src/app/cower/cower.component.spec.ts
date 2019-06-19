import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowerComponent } from './cower.component';

describe('CowerComponent', () => {
  let component: CowerComponent;
  let fixture: ComponentFixture<CowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
