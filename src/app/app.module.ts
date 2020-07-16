import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavbarModule} from './navbar/navbar.module';

@NgModule({
  imports: [
    BrowserModule,
    NavbarModule
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap() {
  }
}
