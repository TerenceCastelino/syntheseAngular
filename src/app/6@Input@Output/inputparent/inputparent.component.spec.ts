import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputparentComponent } from './inputparent.component';

describe('InputparentComponent', () => {
  let component: InputparentComponent;
  let fixture: ComponentFixture<InputparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputparentComponent]
    });
    fixture = TestBed.createComponent(InputparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
