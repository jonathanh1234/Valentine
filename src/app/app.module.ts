import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Main component

@NgModule({
  declarations: [
    AppComponent // Only declare AppComponent here
  ],
  imports: [
    BrowserModule // Only import BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }