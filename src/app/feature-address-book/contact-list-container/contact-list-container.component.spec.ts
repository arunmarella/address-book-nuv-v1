import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListContainerComponent } from './contact-list-container.component';

describe('ContactListContainerComponent', () => {
  let component: ContactListContainerComponent;
  let fixture: ComponentFixture<ContactListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
