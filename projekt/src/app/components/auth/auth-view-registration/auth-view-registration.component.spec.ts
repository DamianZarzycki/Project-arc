import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthViewRegistrationComponent } from './auth-view-registration.component';

describe('AuthViewRegistrationComponent', () => {
  let component: AuthViewRegistrationComponent;
  let fixture: ComponentFixture<AuthViewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthViewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
