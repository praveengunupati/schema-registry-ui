import { Injectable } from '@angular/core';
import { schemas } from '../../../fake-data/schemas.fake';
import { Observable, of } from 'rxjs';
import { Schema } from 'src/app/typings/Schema';
@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  constructor() {}
  getSchemas(): Observable<Schema[]> {
    return of(schemas);
  }
}
