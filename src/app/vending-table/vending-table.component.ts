import { Component, OnInit } from '@angular/core';
import { Product } from '../products-table/products-table.component';

@Component({
  selector: 'app-vending-table',
  templateUrl: './vending-table.component.html',
  styleUrls: ['./vending-table.component.scss']
})
export class VendingTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface VendingMachine{
  id: string;
  warehouseId: string;
  productCount: number;
  products: Array<Product>;
}