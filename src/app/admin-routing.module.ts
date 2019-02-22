import {MyNewComponentComponent} from './my-new-component/my-new-component.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'dash', component: MyNewComponentComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule {
}
