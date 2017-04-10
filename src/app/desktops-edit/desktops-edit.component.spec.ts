import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsEditComponent } from './desktops-edit.component';

describe('DesktopsEditComponent', () => {
  let component: DesktopsEditComponent;
  let fixture: ComponentFixture<DesktopsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
