import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SchemaService } from '../services/schema.service';
import { Schema } from 'src/app/typings/Schema';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.css']
})
export class SchemaListComponent implements OnInit {
  schemas: Schema[] = [];
  @Output() selectSchema = new EventEmitter<Schema>();
  constructor(private schemaService: SchemaService) {}

  ngOnInit() {
    this.fetchSchemas();
  }

  fetchSchemas() {
    this.schemaService.getSchemas().subscribe(schemas => (this.schemas = schemas));
  }

  clickSchema(schema: Schema) {
    this.selectSchema.emit(schema);
  }
}
