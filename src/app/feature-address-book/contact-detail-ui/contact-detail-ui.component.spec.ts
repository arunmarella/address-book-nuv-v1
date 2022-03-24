import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailUiComponent } from './contact-detail-ui.component';

describe('ContactDetailUiComponent', () => {
  let component: ContactDetailUiComponent;
  let fixture: ComponentFixture<ContactDetailUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
