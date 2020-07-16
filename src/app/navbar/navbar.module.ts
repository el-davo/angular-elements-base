import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ],
  entryComponents: [
    NavbarComponent
  ]
})
export class NavbarModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(NavbarComponent, {injector});

    customElements.define('app-navbar', custom);
  }
}
