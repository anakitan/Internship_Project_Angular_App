import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesModalComponent } from './cases-modal.component';

describe('CasesModalComponent', () => {
  let component: CasesModalComponent;
  let fixture: ComponentFixture<CasesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesModalComponent]
    });
    fixture = TestBed.createComponent(CasesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
