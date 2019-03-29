import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMatModule } from '../shared-mat/shared-mat.module';
import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaComponent } from './schema.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaGroundComponent } from './schema-ground/schema-ground.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AceEditorModule } from 'ng2-ace-editor';
@NgModule({
  declarations: [SchemaComponent, SchemaListComponent, SchemaGroundComponent],
  imports: [CommonModule, FlexLayoutModule, SharedMatModule, AceEditorModule, SchemaRoutingModule]
})
export class SchemaModule {}
