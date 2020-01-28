import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLogoutComponent } from './back-logout.component';

describe('BackLogoutComponent', () => {
  let component: BackLogoutComponent;
  let fixture: ComponentFixture<BackLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
