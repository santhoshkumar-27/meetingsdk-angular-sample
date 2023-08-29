import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsdkComponentsComponent } from './meetingsdk-components.component';

describe('MeetingsdkComponentsComponent', () => {
  let component: MeetingsdkComponentsComponent;
  let fixture: ComponentFixture<MeetingsdkComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsdkComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsdkComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
