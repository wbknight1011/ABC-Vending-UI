import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseTableComponent } from './warehouse-table/warehouse-table.component';
import { VendingTableComponent } from './vending-table/vending-table.component';
import { ProductsTableComponent } from './products-table/products-table.component';

const routes: Routes = 
[
  { path: '', component: WarehouseTableComponent },
  { path: 'vending-machines', component: VendingTableComponent },
  { path: 'products', component: ProductsTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
