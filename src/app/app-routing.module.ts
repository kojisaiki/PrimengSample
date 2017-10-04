import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataScrollerSampleComponent } from './data-scroller-sample/data-scroller-sample.component';

const routes: Routes = [
  { path: 'data-scroller-sample', component: DataScrollerSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
