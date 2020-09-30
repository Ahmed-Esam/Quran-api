import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { RecitersComponent } from './Reciters/reciters/reciters.component';
import {HttpClientModule} from '@angular/common/http';
import { ReaderComponent } from './Reader/reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecitersComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
