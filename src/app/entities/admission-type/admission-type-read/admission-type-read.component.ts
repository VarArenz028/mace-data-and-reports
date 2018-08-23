import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

import { AdmissionTypeService } from '../admission-type.service';

@Component({
  selector: 'app-admission-type-read',
  templateUrl: './admission-type-read.component.html',
  styleUrls: ['./admission-type-read.component.css']
})
export class AdmissionTypeReadComponent implements OnInit {
  @Input() entityName: string;  
  myCols: any[];  
  myData: Array<any>;
  sales: any[];

  constructor(private admissionTypeService: AdmissionTypeService) { }

  ngOnInit() {
    this.readData();
  }

  readData() {    
    this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];

    this.myCols = [
          { field: 'cityCode', header: 'Vin' },
          { field: 'cityName', header: 'Year' },
          { field: 'provinceCode', header: 'Brand' },
          { field: 'regionCode', header: 'Color' }
        ];
        
    this.admissionTypeService.read()
      .subscribe(res => {                           
        this.myData = res.cities;                 
      },
      error => {
        console.log("Encountered error while processing your requests -> " + error);          
      },
      () => {
        //this.myCoverageService.IsProcessing = false;
      })    
  }
}
