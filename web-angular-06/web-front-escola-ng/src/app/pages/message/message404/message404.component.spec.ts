import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Message404Component } from './message404.component';

describe('Message404Component', () => {
  let component: Message404Component;
  let fixture: ComponentFixture<Message404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Message404Component]
    });
    fixture = TestBed.createComponent(Message404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
