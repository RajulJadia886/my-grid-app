import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import {data}  from '../data'

@Component({
  selector: 'app-root',
  template:`<ejs-grid [dataSource]='data' [allowGrouping]="true" [allowFiltering]="true" [allowSorting]="true" [allowPaging]="true" [pageSettings]='pageSettings'>
    <e-columns>
      <e-column field="OrderID" headerText='Product ID' textAlign="Left" width='80'></e-column>
      <e-column field="CustomerID" headerText="Customer ID" textAlign="left"></e-column>
      <e-column field="EmployeeID" headerText="Customer ID" textAlign="left"></e-column>
      <e-column field="OrderDate" headerText="Order Date" textAlign="left"></e-column>
      <e-column field="ShipName" headerText="Ship Name" textAlign="left"></e-column>
      <e-column field="ShipCity" headerText="Ship City" textAlign="left"></e-column>
      <e-column field="ShipAddress" headerText="Ship Address" textAlign="left" width="150"></e-column>
      <e-column field="ShipRegion" headerText="Ship Region" textAlign="left"></e-column>
      <e-column field="ShipPostalCode" headerText="Ship Postal Code" textAlign="left" width="150"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country" textAlign="left"></e-column>
      <e-column field="Freight" textAlign="left"></e-column>
      <e-column field="Verified" textAlign="left"></e-column>
    </e-columns>
  </ejs-grid>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public data: Object[] = []
  public pageSettings: PageSettingsModel = {pageSize:5}
  ngOnInit(): void {
    this.data = data;
  }
  
}
