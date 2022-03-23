import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListUiComponent } from './contact-list-ui.component';

describe('ContactListUiComponent', () => {
  let component: ContactListUiComponent;
  let fixture: ComponentFixture<ContactListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
