import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';
import {  FlexLayoutModule } from '@angular/flex-layout';
import { BarComponent } from './bar/bar.component';
import { DataComponent } from './data/data.component';
import { FlxUiDatatableModule,FlxUiDataTable } from 'flx-ui-datatable';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    DataComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FlxUiDatatableModule,
    HttpClientModule,
    FontAwesomeModule
   
  ],
  providers: [
    FlxUiDataTable
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
