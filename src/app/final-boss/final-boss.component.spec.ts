import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBossComponent } from './final-boss.component';

describe('FinalBossComponent', () => {
  let component: FinalBossComponent;
  let fixture: ComponentFixture<FinalBossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
