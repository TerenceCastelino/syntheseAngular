import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseRouterComponent } from './synthese-router.component';

describe('SyntheseRouterComponent', () => {
  let component: SyntheseRouterComponent;
  let fixture: ComponentFixture<SyntheseRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntheseRouterComponent]
    });
    fixture = TestBed.createComponent(SyntheseRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
