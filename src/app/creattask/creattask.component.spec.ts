import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreattaskComponent } from './creattask.component';

describe('CreattaskComponent', () => {
  let component: CreattaskComponent;
  let fixture: ComponentFixture<CreattaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreattaskComponent]
    });
    fixture = TestBed.createComponent(CreattaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
