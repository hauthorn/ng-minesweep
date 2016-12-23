import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {FieldGridComponent} from './field-grid/field-grid.component';
import { FieldComponent } from './field/field.component';
import 'hammerjs';
import { AiBoxComponent } from './ai-box/ai-box.component';

@NgModule({
  declarations: [
    FieldGridComponent,
    AppComponent,
    FieldComponent,
    AiBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
