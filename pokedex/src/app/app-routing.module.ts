import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: '', redirectTo:'pages/home', pathMatch: 'full'
  }, */
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then(p => p.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
