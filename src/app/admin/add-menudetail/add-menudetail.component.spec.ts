import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenudetailComponent } from './add-menudetail.component';

describe('AddMenudetailComponent', () => {
  let component: AddMenudetailComponent;
  let fixture: ComponentFixture<AddMenudetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMenudetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMenudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
