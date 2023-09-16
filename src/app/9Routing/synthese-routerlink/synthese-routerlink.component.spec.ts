import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseRouterlinkComponent } from './synthese-routerlink.component';

describe('SyntheseRouterlinkComponent', () => {
  let component: SyntheseRouterlinkComponent;
  let fixture: ComponentFixture<SyntheseRouterlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntheseRouterlinkComponent]
    });
    fixture = TestBed.createComponent(SyntheseRouterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
