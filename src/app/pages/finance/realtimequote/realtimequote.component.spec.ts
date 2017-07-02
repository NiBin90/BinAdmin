import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimequoteComponent } from './realtimequote.component';

describe('RealtimequoteComponent', () => {
  let component: RealtimequoteComponent;
  let fixture: ComponentFixture<RealtimequoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimequoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
