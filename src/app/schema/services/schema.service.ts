import { Injectable } from '@angular/core';
import { schemas } from '../../../fake-data/schemas.fake';
import { Observable, of } from 'rxjs';
import { Schema } from 'src/app/typings/Schema';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  baseurl = "https://cp1.demo.playground.landoop.com/api/schema-registry/";
  constructor(private http: HttpClient) { }
  
  getSubjects(){
    return this.http.get(this.baseurl+"subjects");
  }

  getLatestSchema(SubjectName: String){
    return this.http.get(this.baseurl+"subjects/"+SubjectName+"/versions/latest");
  }
}
