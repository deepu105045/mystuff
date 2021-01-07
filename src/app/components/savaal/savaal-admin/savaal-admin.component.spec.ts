import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavaalAdminComponent } from './savaal-admin.component';

describe('SavaalAdminComponent', () => {
  let component: SavaalAdminComponent;
  let fixture: ComponentFixture<SavaalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavaalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavaalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
