import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profil1Component } from './profil1.component';

describe('Profil1Component', () => {
  let component: Profil1Component;
  let fixture: ComponentFixture<Profil1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Profil1Component]
    });
    fixture = TestBed.createComponent(Profil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
