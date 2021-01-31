import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmpDetailsComponent } from './modify-emp-details.component';

describe('ModifyEmpDetailsComponent', () => {
  let component: ModifyEmpDetailsComponent;
  let fixture: ComponentFixture<ModifyEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
