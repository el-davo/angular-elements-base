import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {createCustomElement} from '@angular/elements';
import {StoreModule} from '@ngrx/store';
import {reducer} from './navbar.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ClrNavigationModule} from '@clr/angular';

export function appReducer(state, action) {
  return reducer(state, action);
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({navbar: appReducer}),
    StoreDevtoolsModule.instrument(),
    ClrNavigationModule
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
