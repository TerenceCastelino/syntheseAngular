import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependanceRoutingComponent } from './dependance-routing.component';

describe('DependanceRoutingComponent', () => {
  let component: DependanceRoutingComponent;
  let fixture: ComponentFixture<DependanceRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependanceRoutingComponent]
    });
    fixture = TestBed.createComponent(DependanceRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
