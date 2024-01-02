import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CompanyRegistrationComponent } from './company-registration.component';

describe('CompanyRegistrationComponent', () => {
  let component: CompanyRegistrationComponent;
  let fixture: ComponentFixture<CompanyRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyRegistrationComponent]
    });
    fixture = TestBed.createComponent(CompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
