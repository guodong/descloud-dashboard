import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsViewComponent } from './desktops-view.component';

describe('DesktopsViewComponent', () => {
  let component: DesktopsViewComponent;
  let fixture: ComponentFixture<DesktopsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
