import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLinkCommentsComponent } from './user-link-comments.component';

describe('UserLinkCommentsComponent', () => {
  let component: UserLinkCommentsComponent;
  let fixture: ComponentFixture<UserLinkCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLinkCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLinkCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
