import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTabsComponent } from './address-tabs.component';

describe('AddressTabsComponent', () => {
  let component: AddressTabsComponent;
  let fixture: ComponentFixture<AddressTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressTabsComponent]
    });
    fixture = TestBed.createComponent(AddressTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
