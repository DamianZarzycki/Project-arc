import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthViewLoginComponent } from './auth-view-login.component';

describe('AuthViewLoginComponent', () => {
  let component: AuthViewLoginComponent;
  let fixture: ComponentFixture<AuthViewLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthViewLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthViewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
