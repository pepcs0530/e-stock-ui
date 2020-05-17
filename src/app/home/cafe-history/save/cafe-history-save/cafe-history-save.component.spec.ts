import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHistorySaveComponent } from './cafe-history-save.component';

describe('CafeHistorySaveComponent', () => {
  let component: CafeHistorySaveComponent;
  let fixture: ComponentFixture<CafeHistorySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeHistorySaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHistorySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
