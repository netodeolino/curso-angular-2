import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroFacilComponent } from './meu-primeiro-facil/meu-primeiro-facil.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroFacilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
