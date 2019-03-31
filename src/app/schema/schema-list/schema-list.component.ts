import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SchemaService } from '../services/schema.service';
import { Schema } from 'src/app/typings/Schema';
import {MatTableDataSource} from '@angular/material';

export interface SchemaList {
  name: string;
}

const ELEMENT_DATA: SchemaList[] = [
];

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.css']
})
export class SchemaListComponent implements OnInit {
  schemas: Schema[] = [];
  @Output() selectSchema = new EventEmitter<String>();
  constructor(private schemaService: SchemaService) {}

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {
    this.fetchSchemas();
    
  }

  fetchSchemas() {
    this.schemaService.getSubjects().subscribe((res)=>{
      for (let entry in res) {
        ELEMENT_DATA.push({name: res[entry]})
      }
      this.dataSource=new MatTableDataSource(ELEMENT_DATA);
    }); 
  }
  
  
  displayedColumns: string[] = ['name'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickSchema(subjectName: String) {
    this.selectSchema.emit(subjectName);
  }
}
