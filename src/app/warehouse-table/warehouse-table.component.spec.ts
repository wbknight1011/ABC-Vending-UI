import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';

import { WarehouseTableComponent } from './warehouse-table.component';

describe('WarehouseTableComponent', () => {
  let component: WarehouseTableComponent;
  let fixture: ComponentFixture<WarehouseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Render Component Span Title', () => {
    const fixture = TestBed.createComponent(WarehouseTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Warehouses');
  });

  it('Should have elements in warehouses', () => {
    const fixture = TestBed.createComponent(WarehouseTableComponent);
    fixture.detectChanges();
    const warehouseComponent = fixture.componentInstance;
    expect(warehouseComponent.dataSource).not.toHaveSize(0);
  })
});
