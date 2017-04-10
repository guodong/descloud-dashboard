import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopsCreateComponent } from './desktops-create.component';

describe('DesktopsCreateComponent', () => {
  let component: DesktopsCreateComponent;
  let fixture: ComponentFixture<DesktopsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
