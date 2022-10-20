import {NgModule} from '@angular/core';
import {HomeComponent} from "./core/components/home/home.component";
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageListEquipeComponent} from "./equipe/page/page-list-equipe/page-list-equipe.component";
import {PageListPartenaireComponent} from "./partenaire/page/page-list-partenaire/page-list-partenaire.component";
import {PageListBoutiqueComponent} from "./boutique/page/page-list-boutique/page-list-boutique.component";
import {ArticleResolver} from "./resolvers/article.resolver";
import {SizeResolver} from "./resolvers/size.resolver";
import {PartenaireResolver} from "./resolvers/partenaire.resolver";
import {ListEquipeResolver} from "./resolvers/list-equipe.resolver";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'equipes', component: PageListEquipeComponent, resolve: {equipe: ListEquipeResolver}},
  {path: 'partenaires', component: PageListPartenaireComponent, resolve: {partenaire: PartenaireResolver}},
  {path: 'boutique', component: PageListBoutiqueComponent, resolve: {article: ArticleResolver, size: SizeResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
