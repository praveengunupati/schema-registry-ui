import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Schema } from '../../typings/Schema';
import { SchemaService } from '../services/schema.service';
import { SchemaCompatibility } from '../../typings/SchemaCompatibility';
import { CustomSnackbarService } from '../services/snackbar.service';

import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';

@Component({
  selector: 'app-schema-ground',
  templateUrl: './schema-ground.component.html',
  styleUrls: ['./schema-ground.component.css']
})
export class SchemaGroundComponent {
  constructor(
    private schemaService: SchemaService,
    public snackBar: CustomSnackbarService) {}
  

  clickNewSchema: boolean = false;
  schemaModel = '';
  selectedSchema: Schema;
  subjectName: String ='';
  compatibilityLevels: string[] = ['NONE', 'FULL', 'FORWARD', 'BACKWARD'];
  selcompatibilityLevel: String;
  intialCompatibilityLevel: String;
  inprogress = false;
  newSchemaModel ='';
  newSchemaName = '';

  versions: number[];

  validate: boolean = true;
  evolveSchema: boolean =false;
  disableValidate:boolean = false;

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  @Input()
  set schema(subjectName: String) {
    
    if (subjectName === "clicked_new_schema") {
      this.disableValidate = true;
      this.clickNewSchema = true;
    }else{
      this.clickNewSchema = false;
      this.schemaService.getLatestSchema(subjectName,"latest").subscribe((res: Schema)=>{
        this.selectedSchema=res;
        this.schemaModel=JSON.stringify(JSON.parse(res.schema), null, 2);
      });
      this.schemaService.getConfiguration(subjectName).subscribe((res: SchemaCompatibility)=>{
        this.selcompatibilityLevel=res.compatibilityLevel;
        this.intialCompatibilityLevel=res.compatibilityLevel;
      });
      this.schemaService.getAllVersions(subjectName).subscribe((res: number[])=>{
        console.log(res)
        this.versions=res;
      }); 
    }
    
  }

  get schema() {
    return 'hello';
  }

  updateConfiguration(){
    this.inprogress=true;
    this.schemaService.updateConfiguration(this.selectedSchema.subject,this.selcompatibilityLevel).subscribe((res)=>{
      this.snackBar.open("Updated the configuration for "+this.selectedSchema.subject);
     this.intialCompatibilityLevel=this.selcompatibilityLevel;
    }); 
    this.inprogress=false;
  }
  
  onChange(text) {
    try {
      JSON.parse(text);
      this.disableValidate=false;
    } catch (e) {
        this.disableValidate=true;
    }
  }
  
  validateSchema(){
   // console.log(this.schemaModel);
   // console.log(JSON.stringify(JSON.parse(this.selectedSchema.schema), null, 2))
    if(this.schemaModel === JSON.stringify(JSON.parse(this.selectedSchema.schema), null, 2)){
      this.snackBar.open("You have not changed the schema",'');
    }else{
      this.schemaService.checkCompatibility(this.selectedSchema.subject,this.schemaModel).subscribe((res:any)=>{
        console.log(res)
        if(res.is_compatible){
          this.validate =false;
          this.evolveSchema = true;
          this.snackBar.open("You can now evolve the schema");
        }else{
         this.snackBar.open("Schema is not compatible");
        }
      }); 
    }
  }


  cancelEvolveSchema(){
    this.validate =true;
    this.evolveSchema = false;
  }

  updateSchema(){
    this.inprogress=true;
    this.validate =true;
    this.evolveSchema = false;
    this.schemaService.updateSchema(this.selectedSchema.subject,this.schemaModel).subscribe((res:any)=>{      
       this.snackBar.open("Evolved the schema for"+this.selectedSchema.subject);
       this.schemaService.getLatestSchema(this.selectedSchema.subject,"latest").subscribe((res: Schema)=>{
        this.selectedSchema=res;
        this.schemaModel=JSON.stringify(JSON.parse(res.schema), null, 2);
      });
  
      this.schemaService.getAllVersions(this.selectedSchema.subject).subscribe((res: number[])=>{
        console.log(res)
        this.versions=res;
      }); 
    }); 
    
    
    this.inprogress=false;
  }

  getSchemaVersion(){
    this.schemaService.getLatestSchema(this.selectedSchema.subject,this.selectedSchema.version).subscribe((res: Schema)=>{
      this.selectedSchema=res;
      this.schemaModel=JSON.stringify(JSON.parse(res.schema), null, 2);
    });
  }

  createNewSchema(){
   
    this.schemaService.updateSchema(this.newSchemaName,this.newSchemaModel).subscribe((res:any)=>{
        
      this.snackBar.open("Subject created for"+this.newSchemaName);
      this.schemaService.getLatestSchema(this.newSchemaName,"latest").subscribe((res: Schema)=>{
       this.selectedSchema=res;
       this.schemaModel=JSON.stringify(JSON.parse(res.schema), null, 2);
     });
 
     this.schemaService.getAllVersions(this.newSchemaName).subscribe((res: number[])=>{
      this.versions=res;
     }); 
     this.clickNewSchema = false;
   }); 
  }

  
}
