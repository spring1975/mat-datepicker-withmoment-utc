import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { DatepickerMomentExample } from './app/datepicker-moment-example';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateOnlyPipe } from './app/dateonly.pipe';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatMomentDateModule,
    ReactiveFormsModule,
  ],
  // entryComponents: [DatepickerMomentExample],
  declarations: [DatepickerMomentExample, DateOnlyPipe],
  bootstrap: [DatepickerMomentExample],
  providers: [
    /* https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings
    * By default the MomentDateAdapter will creates dates in your time zone specific locale. 
    * You can change the default behaviour to parse dates as UTC by providing the 
    * MAT_MOMENT_DATE_ADAPTER_OPTIONS and setting it to useUtc: true.
    */
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module.
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },

    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);