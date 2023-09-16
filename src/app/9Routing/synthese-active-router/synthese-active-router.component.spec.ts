import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseActiveRouterComponent } from './synthese-active-router.component';

describe('SyntheseActiveRouterComponent', () => {
  let component: SyntheseActiveRouterComponent;
  let fixture: ComponentFixture<SyntheseActiveRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntheseActiveRouterComponent]
    });
    fixture = TestBed.createComponent(SyntheseActiveRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
