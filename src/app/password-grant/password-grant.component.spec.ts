import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGrantComponent } from './password-grant.component';

describe('PasswordGrantComponent', () => {
  let component: PasswordGrantComponent;
  let fixture: ComponentFixture<PasswordGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
