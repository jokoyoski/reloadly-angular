import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';

const routes: Routes = [
  { path: 'details/:name', component: DetailedPageComponent },
  { path: '', component: CountriesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
