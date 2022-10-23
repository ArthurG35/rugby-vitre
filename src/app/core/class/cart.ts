export class Cart {
  private static cartArray: Cart[] = [];
  private static elementInCart = 0;
  public id: number;
  public taille: string;
  public quantite: number;

  constructor(id: number, taille: string, quantite: number) {
    this.id = id;
    this.taille = taille;
    this.quantite = quantite;
  }

  static addCart(ref: number, sizeSelect: string, quantite: number): void {
    if (this.cartArray.findIndex(obj => obj.id === ref) != -1 && this.cartArray.findIndex(obj => obj.taille === sizeSelect) != -1) {
      for (let i = 0; i < this.cartArray.length; i++) {
        if (this.cartArray[i].id == ref && this.cartArray[i].taille == sizeSelect) {
          this.cartArray[i].quantite = Number(this.cartArray[i].quantite) + Number(quantite);
        }
      }

    } else {
      this.cartArray.push(new Cart(ref, sizeSelect, quantite));
    }
    this.countsElement()
  }

  static getCount(): number {
    return this.elementInCart;
  }

  static getAllCart(): Cart[] {
    return this.cartArray
  }

  private static countsElement(): void {
    let _elementCounts = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      _elementCounts += Number(this.cartArray[i].quantite)
    }
    this.elementInCart = _elementCounts;
  }
}
