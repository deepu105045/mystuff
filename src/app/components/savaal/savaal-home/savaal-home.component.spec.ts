import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavaalHomeComponent } from './savaal-home.component';

describe('SavaalHomeComponent', () => {
  let component: SavaalHomeComponent;
  let fixture: ComponentFixture<SavaalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavaalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavaalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
