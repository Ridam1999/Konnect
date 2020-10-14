import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatTableDataSource } from "@angular/material/";
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import { EmailKonnectService } from '../email-konnect.service';
import { PopupComponent } from '../popup/popup.component';
import { details} from 'src/details';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  

  ELEMENT_DATA:details[]=[];
  displayedColumns: string[] = ['MSC','CUSTOMER_ID', 'CUSTOMER_NAME', 'MAIL_ID','EDS','DESK_NAME','DOMAIN','MANAGER_NAME','actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private service:EmailKonnectService,private dialog: MatDialog) {
 

   }

  ngOnInit() {
    this.service.getData().subscribe
    (
      (response)=>
      {
        console.log(response);
        this.ELEMENT_DATA=response;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

      },
      (error)=>
      {
        console.log("Error Occured :"+ error);
      }
    )
  }

  // public getAllData(){
   

  //   this.service.getData().subscribe(
  //     data => {
  //       console.log("response recieved");
  //       console.log(data);
        
  //        this.dataSource.data = data as details[];
  //       // this.dataSource=new MatTableDataSource(data);
            

  //     },
  //     error => {
  //       console.log("exception occured")
  //     }
  //   )
  // }

  onCreate() {
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PopupComponent,dialogConfig);
  }
  onEdit(row){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PopupComponent,dialogConfig);
  }

}
