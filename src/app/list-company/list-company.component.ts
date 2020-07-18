import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getCompanylist().subscribe((result => 
    {
      this.collection = result;
      console.log(this.collection);
    }
    ));
  }

  deleteItem(id) {
    // console.log("DELETED")
    this.commonService.deleteOrg(id).subscribe((result =>{
      console.log("Deleted successfully..!");
    }))
  }

}
