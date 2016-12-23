export class Car {
  public get(): any {
    return {
      owner: this.Owner
    };
  }

  private Owner(root, args): any {
    return {
      name: "John",
    }
  }
}
