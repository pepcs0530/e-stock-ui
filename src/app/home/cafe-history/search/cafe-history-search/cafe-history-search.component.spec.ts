import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHistorySearchComponent } from './cafe-history-search.component';

describe('CafeHistorySearchComponent', () => {
  let component: CafeHistorySearchComponent;
  let fixture: ComponentFixture<CafeHistorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeHistorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHistorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
