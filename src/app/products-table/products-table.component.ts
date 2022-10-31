import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, subscribeOn, throwError } from 'rxjs';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements AfterViewInit, OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://localhost:7195'
    })
  };
  
  apiProducts: Product[] = []; 
  apiProductSource = new MatTableDataSource<Product>;

  warehouseName = '';
  displayedColumns : string [] = ['name', 'category', 'cost', 'stock'];
  
  constructor(private _liveAnnouncer: LiveAnnouncer, private location: Location, private http: HttpClient) 
  {
       
  }

  @ViewChild(MatSort) sort!: MatSort;  

  ngOnInit()
  {
    var state = this.location.getState();
    this.getProducts(state); 
    this.setWarehouseName(state);
    
  }

  ngAfterViewInit() {
    
      
  }

  setWarehouseName(state: any) {
    var name = state.warehouseName;
    this.warehouseName = name;
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

  async getProducts(state: any){
    this.http
      .get<Product[]>(`https://localhost:7195/api/Product/${state.warehouseId}`, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError))
      .subscribe((data) => {
        console.log(data);
        this.apiProducts = data;
        this.apiProductSource = new MatTableDataSource<Product>(this.apiProducts);
        this.apiProductSource.sort = this.sort;
      });
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