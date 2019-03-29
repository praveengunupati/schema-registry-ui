import { Component, OnInit } from '@angular/core';
import { Schema } from '../typings/Schema';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
  selectedSchema: Schema;
  constructor() {}

  ngOnInit() {}

  onSchemaSelect(schema: Schema) {
    this.selectedSchema = schema;
  }
}
