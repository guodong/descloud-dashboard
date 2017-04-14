import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsTerminalComponent } from './desktops-terminal.component';

describe('DesktopsTerminalComponent', () => {
  let component: DesktopsTerminalComponent;
  let fixture: ComponentFixture<DesktopsTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
