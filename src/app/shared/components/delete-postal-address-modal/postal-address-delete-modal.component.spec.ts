import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalAddressDeleteModalComponent } from './postal-address-delete-modal.component';

describe('PostalAddressDeleteModalComponent', () => {
  let component: PostalAddressDeleteModalComponent;
  let fixture: ComponentFixture<PostalAddressDeleteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostalAddressDeleteModalComponent]
    });
    fixture = TestBed.createComponent(PostalAddressDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
