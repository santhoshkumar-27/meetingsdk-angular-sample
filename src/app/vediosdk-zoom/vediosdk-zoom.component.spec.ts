import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VediosdkZoomComponent } from './vediosdk-zoom.component';

describe('VediosdkZoomComponent', () => {
  let component: VediosdkZoomComponent;
  let fixture: ComponentFixture<VediosdkZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VediosdkZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VediosdkZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
