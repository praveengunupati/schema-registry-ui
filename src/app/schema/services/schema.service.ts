import { Injectable } from '@angular/core';
import { schemas } from '../../../fake-data/schemas.fake';
import { Observable, of } from 'rxjs';
import { Schema } from 'src/app/typings/Schema';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  baseurl = "https://cp1.demo.playground.landoop.com/api/schema-registry/";
  constructor(private http: HttpClient) { }
  
  getSubjects(){
    return this.http.get(this.baseurl+"subjects");
  }

  getLatestSchema(SubjectName: String,version){
    return this.http.get(this.baseurl+"subjects/"+SubjectName+"/versions/"+version);
  }
  
  getConfiguration(SubjectName: String){
    return this.http.get(this.baseurl+"config/"+SubjectName);
  }

  getGlobalConfiguration(){
    return this.http.get(this.baseurl+"config");
  }

  updateConfiguration(SubjectName: String,compatibility: String){
    var payLoad: any = { "compatibility": compatibility}
    return this.http.put(this.baseurl+"config/"+SubjectName,payLoad);
  }

  getAllVersions(SubjectName: String){
    return this.http.get(this.baseurl+"subjects/"+SubjectName+"/versions");
  }

  checkCompatibility(SubjectName: String,schema:any){
    var payLoad: any = { "schema": schema}
    return this.http.post(this.baseurl+"compatibility/subjects/"+SubjectName+"/versions/latest",payLoad);
  }

  updateSchema(SubjectName: String,schema:any){
    var payLoad: any = { "schema": schema}
    return this.http.post(this.baseurl+"subjects/"+SubjectName+"/versions",payLoad);
  }

}
