import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScrollerSampleComponent } from './data-scroller-sample.component';

describe('DataScrollerSampleComponent', () => {
  let component: DataScrollerSampleComponent;
  let fixture: ComponentFixture<DataScrollerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScrollerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScrollerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
