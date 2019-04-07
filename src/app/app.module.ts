import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedMatModule } from './shared-mat/shared-mat.module';
import { SchemaModule } from './schema/schema.module';
import { TopicModule } from './topic/topic.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [CommonModule,FormsModule,BrowserModule, BrowserAnimationsModule, SharedMatModule, SchemaModule, AppRoutingModule,HttpClientModule,TopicModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
