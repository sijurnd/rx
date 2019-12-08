import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardTableRoutingModule } from './card-table-routing.module';
import { CardTableComponent } from './card-table.component';

@NgModule({
  imports: [
    CommonModule,
    CardTableRoutingModule
  ],
  declarations: [CardTableComponent]
})
export class CardTableModule { }
