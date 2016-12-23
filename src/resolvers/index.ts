import { Query } from "./query";
import { Car } from "./car";

export class Resolvers {

  public get(): any {
    return {
      Query: new Query().get(),
      Car: new Car().get(),
    };
  }
}
