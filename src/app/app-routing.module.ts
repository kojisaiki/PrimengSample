import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataScrollerSampleComponent } from './data-scroller-sample/data-scroller-sample.component';
import { DataTableSampleComponent } from './data-table-sample/data-table-sample.component';

const routes: Routes = [
  { path: 'data-scroller-sample', component: DataScrollerSampleComponent },
  { path: 'data-table-sample', component: DataTableSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
