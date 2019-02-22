import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin',
        loadChildren: './admin-routing.module#AdminRoutingModule'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
