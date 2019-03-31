import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Schema } from '../../typings/Schema';
import { SchemaService } from '../services/schema.service';
@Component({
  selector: 'app-schema-ground',
  templateUrl: './schema-ground.component.html',
  styleUrls: ['./schema-ground.component.css']
})
export class SchemaGroundComponent {
  constructor(private schemaService: SchemaService) {}
  schemaModel = '';
  selectedSchema: Schema;
  subjectName: String ='';
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  @Input()
  set schema(subjectName: String) {
    
    if (subjectName) {
      this.schemaService.getLatestSchema(subjectName).subscribe((res: Schema)=>{
        this.selectedSchema=res;
        this.schemaModel=JSON.stringify(JSON.parse(res.schema), null, 2);
      }); 
    }
    
  }
  get schema() {
    return 'hello';
  }

  onChange(text) {
    console.log(text);
  }
}
