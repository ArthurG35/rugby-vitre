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
    let existe: boolean = false;
    let index: number = -1;
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].id === ref) {
        if (this.cartArray[i].taille === sizeSelect) {
          existe = true;
          index = i;
          break;
        }
      }
    }
    if (existe) {
      this.cartArray[index].quantite = Number(this.cartArray[index].quantite) + Number(quantite);
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
