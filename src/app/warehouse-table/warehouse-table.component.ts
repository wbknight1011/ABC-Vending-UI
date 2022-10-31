import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { catchError, Observable, retry, throwError } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class WarehouseTableComponent implements OnInit {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://localhost:7195'
    })
  };

  apiWarehouses: WarehouseViewModel[] = [];
  dataSource = new MatTableDataSource<WarehouseViewModel>(hardCodedData);
  apiData = new MatTableDataSource<WarehouseViewModel>;
  displayedColumns : string[] = ['name', 'location', 'vendingMachineCount', 'productCount'];
  apiWarehouses$: Observable<WarehouseViewModel[]> | undefined;
  

  constructor(private http: HttpClient) { }  
  
  ngOnInit() : void  
  { 
      this.getWarehouses();    
  }

  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.errorMessage;
    }
    else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.messgae}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

  getWarehouses() : void{
    this.http
      .get<WarehouseViewModel[]>("https://localhost:7195/api/warehouse", this.httpOptions)
      .pipe(retry(0), catchError(this.handleError))
      .subscribe((data) => {
        this.apiWarehouses = data;
        this.apiData = new MatTableDataSource<WarehouseViewModel>(this.apiWarehouses);
        console.log(this.apiWarehouses);
      });
  }

}

export interface WarehouseViewModel{
  warehouse: Warehosue;
  vendingMachineCount: number;
  productCount: number;
}

export interface Warehosue{
  id: string;
  name: string;
  location: string;
}

const hardCodedData : WarehouseViewModel[] = 
[
  { warehouse: { id: '001', name: 'First Opened Warehouse LLC', location: 'Gainesville, FL' }, vendingMachineCount: 30, productCount: 55},
  { warehouse: { id: '002', name: 'Second Warehouse Inc', location: 'Tampa, FL' }, vendingMachineCount: 14, productCount: 21},
  { warehouse: { id: '003', name: 'Warehousing for Thirds', location: 'Albequerqe, AZ' }, vendingMachineCount: 28, productCount: 82},
  { warehouse: { id: '004', name: 'Fourth Time is Our Charm', location: 'Sweetwater, AL' }, vendingMachineCount: 4, productCount: 44}
]
