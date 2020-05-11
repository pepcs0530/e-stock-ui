import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHistoryComponent } from './cafe-history.component';

describe('CafeHistoryComponent', () => {
  let component: CafeHistoryComponent;
  let fixture: ComponentFixture<CafeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
