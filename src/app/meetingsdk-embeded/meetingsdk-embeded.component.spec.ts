import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsdkEmbededComponent } from './meetingsdk-embeded.component';

describe('MeetingsdkEmbededComponent', () => {
  let component: MeetingsdkEmbededComponent;
  let fixture: ComponentFixture<MeetingsdkEmbededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsdkEmbededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsdkEmbededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
