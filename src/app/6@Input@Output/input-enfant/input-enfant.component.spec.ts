import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEnfantComponent } from './input-enfant.component';

describe('InputEnfantComponent', () => {
  let component: InputEnfantComponent;
  let fixture: ComponentFixture<InputEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputEnfantComponent]
    });
    fixture = TestBed.createComponent(InputEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
