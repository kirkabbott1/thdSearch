// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { FormControl, FormGroup, FormBuilder, NgModel } from "@angular/forms";
// import { DatatableComponent } from '@swimlane/ngx-datatable';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   @Input() value1: string;
//   @Input() value2: string;
  
//   @Output() onUpdateFilter = new EventEmitter<any>();

//   searchForm: FormGroup;

//   newData: void;
//   temp: Array<any>;
//   rows: Array<any>;
  
//   // value1: number;
//   // value2: string;

//   columns: Array<any> = [
//     { prop: 'id', name: "ID"},
//     { prop: 'title', name: "Title Name" }
//   ];

//   getData(): void {
//     // this.newData = this.dataService.getData();
//   }

//   constructor(private dataService: DataService) { }

//   ngOnInit() {
//     // this.newData();
//     // this.dataService.data.subscribe(res => this.newData = res);
//     // this.dataService.getData(this.newData);
//     // console.log(this.newData);
    
//   }

//   updateFilter() {
//     this.onUpdateFilter.emit();
//   }

// }
