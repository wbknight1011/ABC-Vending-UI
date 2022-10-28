import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingTableComponent } from './vending-table.component';

describe('VendingTableComponent', () => {
  let component: VendingTableComponent;
  let fixture: ComponentFixture<VendingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
