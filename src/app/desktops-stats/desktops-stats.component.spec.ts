import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsStatsComponent } from './desktops-stats.component';

describe('DesktopsStatsComponent', () => {
  let component: DesktopsStatsComponent;
  let fixture: ComponentFixture<DesktopsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
