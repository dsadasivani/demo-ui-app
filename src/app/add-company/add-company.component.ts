import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  alert:boolean = false;
  connectionAlert:boolean = false;
  loadingAlert:boolean = false;
  addOrg = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }
  createOrg(){
    // console.log(this.addOrg.value);
    this.resto.addOrg(this.addOrg.value).subscribe((result => {
      this.alert = true;
      this.addOrg.reset({});
      console.log('Data persisted on server', result);
      this.loadingAlert = false;
    }
    ),
    (error => { 
      console.log('Error occured while connecting to DB.', error);
      this.connectionAlert = true;
      this.loadingAlert = false;
    })
    );
  }
  closeAlert(value){
    value = false;
  }

   onSubmit(){
    this.loadingAlert = true;
  }

}
