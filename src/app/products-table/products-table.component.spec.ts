import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module'

import { ProductsTableComponent } from './products-table.component';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ ProductsTableComponent ]
    })
    .compileComponents();
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Render Component Span Title', () => {
    const fixture = TestBed.createComponent(ProductsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Products');
  });
});
