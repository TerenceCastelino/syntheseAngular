import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseRoutingComponent } from './synthese-routing.component';

describe('SyntheseRoutingComponent', () => {
  let component: SyntheseRoutingComponent;
  let fixture: ComponentFixture<SyntheseRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntheseRoutingComponent]
    });
    fixture = TestBed.createComponent(SyntheseRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
