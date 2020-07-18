import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/org";
  constructor(private _http:HttpClient) { }
  getCompanylist(){
    return this._http.get(this.URL);
  }
  addOrg(data){
    return this._http.post(this.URL, data)
  }
  getCurrentOrg(id){
    return this._http.get(`${this.URL}/${id}`)
  }
  updateOrg(id,data){
    return this._http.put(`${this.URL}/${id}`,data)
  }
  deleteOrg(id){
    return this._http.delete(`${this.URL}/${id}`)
  }
}
