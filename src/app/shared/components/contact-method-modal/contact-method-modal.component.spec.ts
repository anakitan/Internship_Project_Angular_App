import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodModalComponent } from './contact-method-modal.component';

describe('ContactMethodModalComponent', () => {
  let component: ContactMethodModalComponent;
  let fixture: ComponentFixture<ContactMethodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodModalComponent]
    });
    fixture = TestBed.createComponent(ContactMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
