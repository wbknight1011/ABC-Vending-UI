import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements AfterViewInit {
  productSource = new MatTableDataSource<Product>(hardCodedProducts);  
  displayedColumns : string [] = ['name', 'warehouseName', 'category', 'cost', 'stock'];
  
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;  

  ngAfterViewInit() {
    this.productSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) 
  {
    if (sortState.direction) 
    {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } 
    else 
    {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface Product
{
  id: string;
  vendingMachineId: string;
  warehouseId: string;
  warehouseName: string;
  name: string;
  category: string;
  cost: number;
  stock: number;
}

const hardCodedProducts : Product[] = [
  { id: '001', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Pepsi', category: 'Soda', cost: 1.25, stock: 1255 },
  { id: '002', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Coke', category: 'Soda', cost: 1.25, stock: 850 },
  { id: '003', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Dr. Pepper', category: 'Soda', cost: 1.25, stock: 715 },
  { id: '004', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Mountain Dew', category: 'Soda', cost: 1.25, stock: 225 },
  { id: '005', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Doritos', category: 'Chips', cost: 1.25, stock: 400 },
  { id: '006', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Cheetos', category: 'Chips', cost: 1.25, stock: 568 },
  { id: '007', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Honey Bun', category: 'Confectionary', cost: 1.25, stock: 745 },
  { id: '008', vendingMachineId: '001', warehouseId: '001', warehouseName: 'First Opened Warehouse LLC', name: 'Powdered Donuts', category: 'Confectionary', cost: 1.25, stock: 385 },
]
