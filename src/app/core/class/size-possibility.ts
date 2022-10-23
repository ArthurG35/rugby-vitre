export class SizePossibility {

  private static sizeArray: SizePossibility[] = [];
  public size: string;

  constructor(size: string) {
    this.size = size;
  }

  static addSize(size: SizePossibility): void {
    this.sizeArray.push(size);
  }

  static checkSizeExist(size: any): number {
    for (let i = 0; i < this.sizeArray.length; i++) {
      if (this.sizeArray[i].size === size) {
        return i
      }
    }
    return -1
  }

  static getSize(index: number): string {
    return this.sizeArray[index].size;
  }

}
