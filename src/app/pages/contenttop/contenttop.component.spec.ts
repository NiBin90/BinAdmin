import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttopComponent } from './contenttop.component';

describe('ContenttopComponent', () => {
  let component: ContenttopComponent;
  let fixture: ComponentFixture<ContenttopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenttopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
