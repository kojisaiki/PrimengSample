import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { 
  DataScrollerModule,
  InputTextModule,
  PanelModule,
} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataScrollerSampleComponent } from './data-scroller-sample/data-scroller-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DataScrollerSampleComponent
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
    InputTextModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
