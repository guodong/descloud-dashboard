import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsDestroyModalComponent } from './desktops-destroy-modal.component';

describe('DesktopsDestroyModalComponent', () => {
  let component: DesktopsDestroyModalComponent;
  let fixture: ComponentFixture<DesktopsDestroyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsDestroyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsDestroyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
