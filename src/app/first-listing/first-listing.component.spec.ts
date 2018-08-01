import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstListingComponent } from './first-listing.component';

describe('FirstListingComponent', () => {
  let component: FirstListingComponent;
  let fixture: ComponentFixture<FirstListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstListingComponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
