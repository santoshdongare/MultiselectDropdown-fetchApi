import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserdataService} from './userdata.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'apifetchdata1';

  dropdownList:any = [];
  dropdownSettings:IDropdownSettings={};
  userData:any=[];

  constructor(private userdataService:UserdataService){

    this.userdataService.getUserData().subscribe(data=>{
      console.log(data);
      this.userData=data;
    })
    
  }
  ngOnInit(){

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Kolhapur' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Nagpur' },
      { item_id: 5, item_text: 'Nashik' }
    ];
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
}
