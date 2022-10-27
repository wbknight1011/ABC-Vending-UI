import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})
export class WarehouseTableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Warehouse>([{name: 'First Opened Warehouse LLC', location: 'Gainesville, FL', vendingMachineCount: 30}]);
  displayedColumns : string[] = ['name', 'location', 'vendingMachineCount'];
  constructor() { }

  ngAfterViewInit(): void {
    
  }

}

export interface Warehouse{
  name: string;
  location: string;
  vendingMachineCount: number;
}
