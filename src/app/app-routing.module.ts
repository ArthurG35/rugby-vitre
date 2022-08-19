import {NgModule} from '@angular/core';
import {HomeComponent} from "./core/components/home/home.component";
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageListEquipeComponent} from "./equipe/page/page-list-equipe/page-list-equipe.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'equipes', component: PageListEquipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
