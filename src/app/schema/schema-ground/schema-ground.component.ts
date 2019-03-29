import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Schema } from '../../typings/Schema';
@Component({
  selector: 'app-schema-ground',
  templateUrl: './schema-ground.component.html',
  styleUrls: ['./schema-ground.component.css']
})
export class SchemaGroundComponent {
  constructor() {}
  schemaModel = '';
  _schema: Schema = { schema: '', id: 0, name: 'new' };
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  @Input()
  set schema(schema: Schema) {
    console.log('Load', schema);
    this._schema = schema;
    if (schema) {
      this.schemaModel = schema.schema;
    }
  }
  get schema() {
    return this._schema;
  }

  onChange(text) {
    console.log(text);
  }
}
