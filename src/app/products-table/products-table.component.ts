import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Product
{
  id: string;
  vendingMachineId: string;
  warehouseId: string;
  name: string;
  category: string;
  cost: number;
}
