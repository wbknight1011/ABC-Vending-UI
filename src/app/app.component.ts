import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'ABC Vending';

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
