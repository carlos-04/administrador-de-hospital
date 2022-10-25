import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';



const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**',pathMatch: 'full', component: NotpagesfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
