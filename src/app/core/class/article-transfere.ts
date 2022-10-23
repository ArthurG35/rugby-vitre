
export class ArticleTransfere {


  private static recapCommande: ArticleTransfere[] = []
  public quantite: number;
  public name: string;
  public prix: number;
  public size: string;
  private id: number;

  constructor(id: number, name: string, prix: number, quantite: number, size: string) {
    this.id = id;
    this.name = name;
    this.prix = prix;
    this.quantite = quantite
    this.size = size
  }

  static resetArticleTransfere(): void {
    ArticleTransfere.recapCommande = [];
  }

  static pushToArray(article: ArticleTransfere): void {
    ArticleTransfere.recapCommande.push(article);
  }

  static getRecap(): ArticleTransfere[] {
    return ArticleTransfere.recapCommande
  }
}
