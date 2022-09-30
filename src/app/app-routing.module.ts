import {NgModule} from '@angular/core';
import {HomeComponent} from "./core/components/home/home.component";
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageListEquipeComponent} from "./equipe/page/page-list-equipe/page-list-equipe.component";
import {PageListPartenaireComponent} from "./partenaire/page/page-list-partenaire/page-list-partenaire.component";
import {PageListBoutiqueComponent} from "./boutique/page/page-list-boutique/page-list-boutique.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'equipes', component: PageListEquipeComponent},
  {path: 'partenaires', component: PageListPartenaireComponent},
  {path: 'boutique', component: PageListBoutiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
