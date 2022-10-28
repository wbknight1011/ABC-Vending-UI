import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})
export class WarehouseTableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Warehouse>(hardCodedData);
  displayedColumns : string[] = ['name', 'location', 'vendingMachineCount', 'productCount'];
  constructor() { }

  ngAfterViewInit(): void { }

}

export interface Warehouse{
  id: string;
  name: string;
  location: string;
  vendingMachineCount: number;
  productCount: number;
}

const hardCodedData : Warehouse[] = 
[
  {id: '001', name: 'First Opened Warehouse LLC', location: 'Gainesville, FL', vendingMachineCount: 30, productCount: 55},
  {id: '002', name: 'Second Warehouse Inc', location: 'Tampa, FL', vendingMachineCount: 14, productCount: 21},
  {id: '003', name: 'Warehousing for Thirds', location: 'Albequerqe, AZ', vendingMachineCount: 28, productCount: 82},
  {id: '004', name: 'Fourth Time is Our Charm', location: 'Sweetwater, AL', vendingMachineCount: 4, productCount: 44}
]
