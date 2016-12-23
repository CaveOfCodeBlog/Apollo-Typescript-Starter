export class Query {
  public get(): any {
    return {
      getTestCar: this.Car,
      add: this.Add,
    };
  }

  private Car(root, args): any {
    return {
      model: "S3",
      licensePlate: "X230X03"
    }
  }

  private Add(root, { a, b }): number { 
    return a+b;
  }
}
