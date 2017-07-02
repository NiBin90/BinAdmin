import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictrendComponent } from './basictrend.component';

describe('BasictrendComponent', () => {
  let component: BasictrendComponent;
  let fixture: ComponentFixture<BasictrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasictrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
