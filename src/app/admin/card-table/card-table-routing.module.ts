import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTableComponent } from './card-table.component';


const routes: Routes = [
  {
    path: '',
    component: CardTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardTableRoutingModule { }
