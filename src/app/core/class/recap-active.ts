export class RecapActive {
  private static active: boolean = false;
  public active: boolean

  constructor(active: boolean) {
    this.active = active;
  }

  static getActiveRecap(): boolean {
    return this.active
  }

  static setActiveRecap(): void {
    this.active = !this.active;
  }
}
