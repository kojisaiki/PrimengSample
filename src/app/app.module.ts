import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { 
  DataScrollerModule,
  DataTableModule,
  InputTextModule,
  PanelModule,
} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataScrollerSampleComponent } from './data-scroller-sample/data-scroller-sample.component';
import { DataTableSampleComponent } from './data-table-sample/data-table-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DataScrollerSampleComponent,
    DataTableSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    /**
     * PrimeNG Modules
     */
    DataScrollerModule,
    DataTableModule,
    InputTextModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
