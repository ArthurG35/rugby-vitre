import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageListBoutiqueComponent} from "./page/page-list-boutique/page-list-boutique.component";
import {ArticleResolver} from "../resolvers/article.resolver";
import {SizeResolver} from "../resolvers/size.resolver";

const routes: Routes = [
  {path: '', component: PageListBoutiqueComponent, resolve: {article: ArticleResolver, size: SizeResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule {
}
