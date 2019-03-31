import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';

import { SharedMatModule } from '../shared-mat/shared-mat.module';
import { AltertopicComponent } from './altertopic/altertopic.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [TopicComponent, AltertopicComponent, HeaderComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    SharedMatModule
  ]
})
export class TopicModule { }
