import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './feature-modules/user/auth-guard.service';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'Welcome - Product Management' },
  },
  {
    path: 'products',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./feature-modules/products/product.module').then(
        (m) => m.ProductModule
      ),
    data: { title: 'Products - Product Management' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
