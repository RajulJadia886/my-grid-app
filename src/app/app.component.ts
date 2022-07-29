import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import {data}  from '../data'
import {DataManager, ODataV4Adaptor,Query} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template:`<ejs-grid [dataSource]='data' [query]='param'>
    <e-columns>
      <e-column field="OrderID" headerText="Order ID"></e-column>
      <e-column field="CustomerID" headerText="Customer ID"></e-column>
      <e-column field="ShipName" headerText="Ship Name"></e-column>
      <e-column field="ShipCity" headerText="Ship City"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country"></e-column>
    </e-columns>
  </ejs-grid>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public data: DataManager = new DataManager({
    url:'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
    adaptor: new ODataV4Adaptor() // since this url requires this adaptor hence we have used this.
  })

  //if you want to pass additional query params.
  //to pass multiple params you can use multiple add params
  public param: Query = new Query().addParams('Status','Closed');
}
