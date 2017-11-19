import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FormControl, FormGroup, FormBuilder, NgModel } from "@angular/forms";
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(DatatableComponent) dataTable: DatatableComponent;
  myData: Array<any>;
  temp: Array<any>;
  rows: Array<any>;

  userIdVal: number;
  idVal: number;
  titleVal: string;
  completedVal: boolean;

  completedList: Array<any> = [];
  idList: Array<any> = [];
  eventTitle: string;
  titleInputVal: string;

  columns: Array<any> = [
    { prop: 'userId', name: "User Id" },
    { prop: 'id', name: "ID" },
    { prop: 'title', name: "Title Name" },
    { prop: 'completed', name: "completed" }
  ];

  searchForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data: any) => {
        this.myData = data;
        this.rows = data;
        this.filterData();
      });
  }

  ngOnInit() {
    this.initForm();
    this.initDataTable();
  }

  initForm() {
    this.searchForm = this.fb.group({
      userId: null,
      id: null,
      title: null,
      completed: null

    }, {
        validator: (formGroup: FormGroup) => {
          return this.validatorSearchForm(formGroup);
        }
      });
  }

  validatorSearchForm(formGroup: FormGroup) {
    if (formGroup.get("id").value
      || formGroup.get("title").value
      || formGroup.get('userId').value
      || formGroup.get('completed').value) {
      return null;
    } else {
      return {
        noInput: true
      }
    }
  }

  resetSearchForm(event) {
    this.searchForm.reset({
      userId: null,
      id: null,
      title: null,
      completed: null
    });
    this.userIdVal = null;
    this.idVal = null;
    this.titleVal = null;
    this.completedVal = null;
    this.rows = this.myData;
    this.dataTable.offset = 0;
    this.titleInputVal = event.path[2].children[2].children[0].value = '';
  }

  initDataTable() {
  }

  filterData() {
    this.rows.forEach(row => {
      let isUserId = row.userId;
      // check if value exists in array
      if (this.idList.indexOf(isUserId) == -1) {
        this.idList.push(isUserId);
      }
    });
    this.rows.forEach(row => {
      let isCompletedVal = row.completed;
      if (this.completedList.indexOf(isCompletedVal) == -1) {
        this.completedList.push(isCompletedVal);
      }
    });
  }

  updateFilter(text1, filteredList) {
    // check if filterList is empty
    if (filteredList.length == 0) {
      // if empty, filter through original data
      filteredList = this.myData;
    }
    // filter our data
    let temp = filteredList.filter(function (d) {
      return d.title.toLowerCase().indexOf(text1) !== -1 || !text1;
    });
    console.log("temp in updatefilter ", temp);
    // update the rows
    this.rows = temp;
    // reset table
    this.dataTable.offset = 0;
  }

  search(event) {
    this.eventTitle = event.path[2].children[2].children[0].value;

    const userIdVal = this.userIdVal;
    const idVal = this.idVal;
    const titleVal = this.titleVal;
    const completedVal = this.completedVal;

    let temp = this.myData.filter(function (d) {
      if (userIdVal == undefined && d.completed == completedVal) {
        return d;
      } else if (d.userId == userIdVal && completedVal == undefined) {
        return d;
      } else if (d.userId == userIdVal && d.completed == completedVal) {
        return d;
      } else if (d.userId == userIdVal && d.completed == completedVal && d.title == titleVal) {
        return d;
      } else if (d.userId == userIdVal && d.completed == completedVal && d.title == titleVal && d.id == idVal) {
        return d;
      }
    });

    this.updateFilter(this.eventTitle, temp);
    this.dataTable.offset = 0;
  }
}
