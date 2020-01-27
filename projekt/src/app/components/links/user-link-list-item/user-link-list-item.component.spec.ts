import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLinkListItemComponent } from './user-link-list-item.component';

describe('UserLinkListItemComponent', () => {
  let component: UserLinkListItemComponent;
  let fixture: ComponentFixture<UserLinkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLinkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLinkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
