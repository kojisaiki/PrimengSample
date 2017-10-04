import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableSampleComponent } from './data-table-sample.component';

describe('DataTableSampleComponent', () => {
  let component: DataTableSampleComponent;
  let fixture: ComponentFixture<DataTableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
