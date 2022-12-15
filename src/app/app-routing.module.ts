import {NgModule} from '@angular/core';
import {HomeComponent} from "./core/components/home/home.component";
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./ui/components/layout/layout.component";
import {PageLoginComponent} from "./login/page/page-login/page-login.component";
import {DashboardLayoutComponent} from "./ui/components/dashboard-layout/dashboard-layout.component";
import {DashboardComponent} from "./dashboard/page/dashboard/dashboard.component";
import {AuthGuard} from "./core/guards/auth.guard";


//LazyLoading : https://angular.io/guide/lazy-loading-ngmodules
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {
        path: 'equipes',
        loadChildren: () => import('./equipe/equipe.module').then(module_ => module_.EquipeModule),
      },
      {
        path: 'partenaires',
        loadChildren: () => import('./partenaire/partenaire.module').then(module_ => module_.PartenaireModule),
      },
      {
        path: 'boutique',
        loadChildren: () => import('./boutique/boutique.module').then(module_ => module_.BoutiqueModule),
      }
    ]
  },
  {path: 'login', component: PageLoginComponent},
  {
    canActivate: [AuthGuard],
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
