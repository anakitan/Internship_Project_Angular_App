import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAddressModalComponent } from './postal-address-modal.component';

describe('PostalAddressModalComponent', () => {
  let component: PostalAddressModalComponent;
  let fixture: ComponentFixture<PostalAddressModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostalAddressModalComponent]
    });
    fixture = TestBed.createComponent(PostalAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
