import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodTabsComponent } from './contact-method-tabs.component';

describe('ContactMethodTabsComponent', () => {
  let component: ContactMethodTabsComponent;
  let fixture: ComponentFixture<ContactMethodTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodTabsComponent]
    });
    fixture = TestBed.createComponent(ContactMethodTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
