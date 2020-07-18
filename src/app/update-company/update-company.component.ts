import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  alert:boolean = false;
  connectionAlert:boolean = false;
  loadingAlert:boolean = false;

  editOrg = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private service:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCurrentOrg(this.route.snapshot.params.id).subscribe((result =>
    {
      console.log(result);
      this.editOrg = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        mobile: new FormControl(result['mobile']),
        email: new FormControl(result['email'])
      })
    })
    );
  }
  updateOrgData() {
    this.service.updateOrg(this.route.snapshot.params.id, this.editOrg.value).subscribe((result =>
    {
      console.log("data updated successfully",result);
      this.alert = true;
      this.loadingAlert = false;
    }),
    (error => { 
      console.log('Error occured while connecting to DB.', error);
      this.connectionAlert = true;
      this.loadingAlert = false;
    })
    )
  }
  closeAlert(value){
    value = false;
  }

   onSubmit(){
    this.loadingAlert = true;
  }

}
