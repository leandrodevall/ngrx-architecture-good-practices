import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { WhatsappViewerComponent } from './whatsapp-viewer/whatsapp-viewer.component';
import { TemplatesComponent } from './templates/templates.component';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [WhatsappViewerComponent, TemplatesComponent, ConfigComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
