export class PrixTotal {
  private static prixTotal: number = 0;
  private prix: number;

  constructor(prix: number) {
    this.prix = prix
  }

  static resetPrixTotal(): void {
    this.prixTotal = 0
  }

  static calculPrix(prixAdd: number, multiple: number): void {
    this.prixTotal = Number(this.prixTotal) + (Number(prixAdd) * multiple);
  }

  static getPrixTotal(): number {
    return this.prixTotal;
  }
}
